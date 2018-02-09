import React from 'react';
import 'assets/scss/about.scss';
import PageTitle from 'components/page-title';
import skimap from 'assets/img/skimap.png';
import tb1 from  'assets/img/tb1.png';
import tb2 from  'assets/img/tb2.png';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="about container-fluid">
        <PageTitle title="O areálu..." />
        <div className="row">
          <div className="col-lg-6">
            <img src={skimap} />
          </div>
          <div id="carouselAbout" className="col-lg-6 carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselAbout" data-slide-to="0" className=""></li>
              <li data-target="#carouselAbout" data-slide-to="1" className=""></li>
              <li data-target="#carouselAbout" data-slide-to="2" className="active"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item">

                <h5>Občerstvení</h5>
                <p>Využijte našeho SKI bufetu nebo útulné hospody v penzionu Liberecká bouda přímo na svahu. </p>
              </div>
              <div className="carousel-item active carousel-item-left">
              </div>
              <div className="carousel-item carousel-item-next carousel-item-left">
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselAbout" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselAbout" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Component;
