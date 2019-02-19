function initMap() {
	var location = {lat: 50.661539, lng: 15.632497};
    var map = new google.maps.Map(document.getElementById('map_container'), {
        center: location,
        zoom: 13.1
    });

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Skiareál Luisino Údolí'
    });
}
        
