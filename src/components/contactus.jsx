import React from 'react';
import 'assets/scss/contactus.scss';
import PageTitle from 'components/page-title';

class Component extends React.PureComponent {

  render() {
    return (
      <section id="contactus" className="page contactus">
        <PageTitle title="Napište nám" />
        <div className="container-fluid">
          <div className="row">
            <div  className="col-md-6">
              <form>
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" required />
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="inputPassword3" placeholder="Jan Novák" />
                </div>
                <div class="form-group">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Váš text" required></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-lg btn-primary pull-right">Odeslat</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Component;
