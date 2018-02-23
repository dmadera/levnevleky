import React from 'react';
import 'assets/scss/navbar.scss';
import logo from 'assets/img/logo.svg';

class Component  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navbar: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let offset = window.pageYOffset;
    this.setState({navbar: offset > 0});
  }

  render() {
    var className = 'navbar fixed-top navbar-expand-lg navbar-dark bg-dark'
      + (this.state.navbar ? '' : ' top');
    return (
      <nav class={className}>
        <a href="#" className="navbar-brand logo">
          <h1 className="text-hide">SKI AREÁL Luisino údolí</h1>
          <img src={logo} alt="SKI AREÁL Luisino údolí" />
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button"
            data-toggle="collapse" data-target="#navbar"
            aria-controls="navbar" aria-expanded="false"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#skimap">Skimapa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#price-list">Ceník</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ski-school">Škola</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ski-rental">Půjčovna</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#map">Kde nás najdete</a>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Component;
