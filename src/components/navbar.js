import React from 'react';
import 'assets/scss/navbar.scss';
import logo from 'assets/img/logo.svg';

//const CSSTransitionGroup = React.addons.CSSTransitionGroup;
//const TransitionGroup = React.addons.TransitionGroup;

class Navbar  extends React.Component {

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
        <a class="" href="#">
          <h1 class="navbar-brand logo text-hide">
            SKI AREÁL Luisino údolí
            <img src={logo} alt="SKI AREÁL Luisino údolí" />
          </h1>
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
              <a class="nav-link" href="#">O areálu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ceník</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Škola</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Půjčovna</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Půjčovna</a>
            </li>
          </ul>
        </div>
      </nav>
      );
}
}

export default Navbar;
