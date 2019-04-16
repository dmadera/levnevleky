$(document).ready(function() {
	var response_obj = {};

  var serializedData = {};
  serializedData['token'] = window.localStorage.getItem('token');

	request = $.ajax({
        url: "scripts/ski-info.php",
        type: "get",
        dataType: 'text',
        contentType: 'application/x-www-form-urlencoded',
        data: serializedData
    });

    request.done(function(response, textStatus, jqXHR) {
        response_obj = JSON.parse(response);
        if('loc_info' in response_obj) {
        	console.log("Informace z holidayinfo.cz byly úspešně získány.");    	
        } else {
        	console.log("Nepodařilo se zísat informace z holidayinfo.cz.");
        }
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        console.log("Nepodařilo se zísat informace z holidayinfo.cz.", errorThrown);
    });

    request.always(function() {
    	updateSkiInfo(response_obj);
    });
});

function removeDiacritics(text){
	const chars = "ÁÄČÇĎÉĚËÍŇÓÖŘŠŤÚŮÜÝŽáäčçďéěëíňóöřšťúůüýž";
	const chars1 = "AACCDEEEINOORSTUUUYZaaccdeeeinoorstuuuyz";
	return strtr(text, chars, chars1);
}

function updateSkiInfo(data) {
	// lifts 
	const lifts = 'loc_lifts' in data ? data.loc_lifts.lift : []; 
	lifts.forEach(function(lift) {
		updateLiftInfo(lift.name.toLowerCase(), lift.status_code);
	});

	// slopes
	var slopes = 'loc_slopes' in data ? data.loc_slopes.slope : []; 
  // snowpark is not registered on holiday info
  var tmp = Object.assign({}, slopes[0]);
  tmp.name = 'snowpark';
  slopes.push(tmp);

	slopes.forEach(function(slope) {
		updateSlopeInfo(slope.name, slope.status_code);
	});

	// snowparks
	// var snowparks = 'loc_snowparks' in data ? data.loc_snowparks : []; 
	// snowparks.forEach(function(snowpark) {
	// 	updateSlopeInfo(snowpark.name, snowpark.status_code);
	// });

	// weather and snow
	const weather = 'loc_info_winter' in data ? data.loc_info_winter : {}; 
	updateWeatherInfo(weather);

	// snowmaking
	var snowmaking = false;
	// if('loc_slopes' in data && data.loc_slopes.slope[0].snowmaking_code == 2) {
	// 	snowmaking = true;
	// }

	updateSnowmakingInfo(snowmaking);
}

function updateLiftInfo(lift, status) {
	var obj = $('.' + lift + ' .status');
	if(status == 1) {
		obj.attr('title', 'V provozu');
		obj.addClass('open');
		obj.removeClass('closed');
	} else if (status == 2) {
		obj.attr('title', 'Mimo provoz');
		obj.addClass('closed');
		obj.removeClass('open');
	} else {
		obj.attr('title', '');
		obj.removeClass('open');
		obj.removeClass('closed');		
	}
}

function updateSlopeInfo(slope_name, status) {
	const classname = removeDiacritics(slope_name.replace(/\s/g, '').toLowerCase());

	var obj = $('.' + classname + ' .status');
	if(status == 2) {
		obj.attr('title', 'V provozu');
		obj.addClass('open');
		obj.removeClass('closed');
	} else if (status == 3) {
		obj.attr('title', 'Mimo provoz');
		obj.addClass('closed');
		obj.removeClass('open');
	} else {
		obj.attr('title', '');
		obj.removeClass('open');
		obj.removeClass('closed');
	}
}

function updateWeatherInfo(data) {

	$('#temperature').text('temp_0700' in data && $.isNumeric(data.temp_0700) ? data.temp_0700 : "-");
	$('#weathertext').text('weather_0700_text' in data && data.weather_0700_code != 1 ? data.weather_0700_text : "");

  if(!$.isNumeric(data.temp_0700)) {
    $('.areal .temperature').hide();
  }

	var snowheight = '0';
	if('snowheight_slopes_max' in data && 'snowheight_slopes_min' in data && $.isNumeric(data.snowheight_slopes_min) && $.isNumeric(data.snowheight_slopes_max)) {
		snowheight = data.snowheight_slopes_min + '-' + data.snowheight_slopes_max;
	} else if('snowheight_slopes' in data && $.isNumeric(data.snowheight_slopes)) {
		snowheight = data.snowheight_slopes;
	}
	$('#snowheight').text(snowheight);
	$('#snowtype').text('snowtype_text' in data && data.snowtype_code != 1 ? data.snowtype_text : 'žádný');

	var regex = /([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})/;
	var f = data['@attributes'].lastchange.match(regex);
	var lastchange = "{3}.{2}.{1} {4}:{5}:{6}".format(f);
	$('#lastchange').text("Aktualizováno: " + lastchange);
}

function updateSnowmakingInfo(status) {	
	return status ? $('.snowmaking').removeClass('d-none') : $('.snowmaking').addClass('d-none');
}

function strtr(str, from, to) {
  var fr = '',
    i = 0,
    j = 0,
    lenStr = 0,
    lenFrom = 0,
    tmpStrictForIn = false,
    fromTypeStr = '',
    toTypeStr = '',
    istr = '';
  var tmpFrom = [];
  var tmpTo = [];
  var ret = '';
  var match = false;

  // Received replace_pairs?
  // Convert to normal from->to chars
  if (typeof from === 'object') {
    // Not thread-safe; temporarily set to true
    tmpStrictForIn = this.ini_set('phpjs.strictForIn', false);
    from = this.krsort(from);
    this.ini_set('phpjs.strictForIn', tmpStrictForIn);

    for (fr in from) {
      if (from.hasOwnProperty(fr)) {
        tmpFrom.push(fr);
        tmpTo.push(from[fr]);
      }
    }

    from = tmpFrom;
    to = tmpTo;
  }

  // Walk through subject and replace chars when needed
  lenStr = str.length;
  lenFrom = from.length;
  fromTypeStr = typeof from === 'string';
  toTypeStr = typeof to === 'string';

  for (i = 0; i < lenStr; i++) {
    match = false;
    if (fromTypeStr) {
      istr = str.charAt(i);
      for (j = 0; j < lenFrom; j++) {
        if (istr == from.charAt(j)) {
          match = true;
          break;
        }
      }
    } else {
      for (j = 0; j < lenFrom; j++) {
        if (str.substr(i, from[j].length) == from[j]) {
          match = true;
          // Fast forward
          i = (i + from[j].length) - 1;
          break;
        }
      }
    }
    if (match) {
      ret += toTypeStr ? to.charAt(j) : to[j];
    } else {
      ret += str.charAt(i);
    }
  }

  return ret;
}

String.prototype.format = function (arguments) {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a;
}