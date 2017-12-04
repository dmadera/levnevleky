import React from 'react';
import 'assets/scss/navbar.scss';
import logo from 'assets/img/logo.svg';

class Navbar  extends React.PureComponent {
  render() {
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="" href="#">
          <h1 class="navbar-brand logo text-hide">
            SKI AREÁL Luisino údolí
            <img src={logo} alt="SKI AREÁL Luisino údolí" />
          </h1>
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button"
            data-toggle="collapse" data-target="#navbar"
            aria-controls="navbarColor01" aria-expanded="false"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">O areálu <span class="sr-only">(current)</span></a>
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
