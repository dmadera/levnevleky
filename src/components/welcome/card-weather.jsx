import React from 'react';

class Component extends React.PureComponent {

  componentWillMount() {
    (function(d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0];
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src="https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js,fjs);
      }
    }
    (document,"script","weatherwidget-io-js"));
  }

  render() {
    return (
      <div class="card">
        <a class="weatherwidget-io"
            href="https://forecast7.com/cs/50d6515d66/dolni-dvur/"
            data-label_1="DOLNÍ DVŮR"
            data-label_2="Počasí"
            data-font="Helvetica"
            data-days="5"
            data-theme="pure">
          DOLNÍ DVŮR Počasí
        </a>
      </div>
   );
  }
}

export default Component;
