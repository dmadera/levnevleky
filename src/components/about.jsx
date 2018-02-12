import React from 'react';
import 'assets/scss/about.scss';
import PageTitle from 'components/page-title';
import skimap from 'assets/img/skimap.png';
import restaurant from  'assets/img/about/restaurant.png';
import skibar from  'assets/img/about/skibar.png';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="page about container-fluid">
        <PageTitle title="O areálu..." />
        <div className="row">
          <div className="col-lg-6">
            <img src={skimap} />
          </div>
          {/*<div id="carouselAbout" className="col-lg-6 carousel slide" data-ride="carousel">*/}
          <div id="carouselAbout" className="col-lg-6 carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselAbout" data-slide-to="0" className="active"></li>
            </ol>
            <div className="carousel-inner">
              <div className="food carousel-item active">
                  <h5>Občerstvení</h5>
                  <h7>O Vaše hladové krky se postaráme na Liberecké boudě u vystupní stanice lyžařského vleku. </h7>
                  <img src={skibar} className="skibar" />
                  <img src={restaurant} className="restaurant"/>
                  <p className="skibar">Venku s vyhledem na lyžařské vleky, aby Vaše ratolesti byly pod drobnohledem... </p>
                  <p className="restaurant">Uvnitř v útulné restauraci, kde se ohřeje a nasytí i ten největší zmrzlík...</p>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselAbout" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Předchozí</span>
            </a>
            <a className="carousel-control-next" href="#carouselAbout" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Další</span>
            </a>
          </div>
        </div>
      </section>
    );
    }
}

export default Component;
