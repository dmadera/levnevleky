import React from 'react';
import 'assets/scss/welcome.scss';
import logo from 'assets/img/logo.svg';

class Welcome extends React.PureComponent {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a class="" href="#">
        <h1 class="navbar-brand logo text-hide">
            SKI AREÁL Luisino údolí
            <img src={logo} alt="SKI AREÁL Luisino údolí" />
        </h1>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
      );
  }
}

export default Welcome;