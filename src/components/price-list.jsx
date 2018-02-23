import React from 'react';
import 'assets/scss/price-list.scss';
import PageTitle from 'components/page-title';

class Component extends React.PureComponent {

  render() {
    return (
      <section id="price-list" className="page price-list container-fluid">
        <PageTitle title="Skipassy" />
        <div className="row">
          <div className="col-lg-4">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr><th>Denní jízdné</th><th>Dospělí</th><th>Děti</th></tr>
                <tr><td>Celodenní</td><td>390</td><td>290</td></tr>
                <tr><td>Od 12:00</td><td>390</td><td>290</td></tr>
                <tr><td>Od 13:00</td><td>390</td><td>290</td></tr>
                <tr><td>Od 14:00</td><td>390</td><td>290</td></tr>
                <tr><td>1 hodina</td><td>390</td><td>290</td></tr>
                <tr><td>2 hodina</td><td>390</td><td>290</td></tr>
                <tr><td>3 hodina</td><td>390</td><td>290</td></tr>
                <tr><td>Školní skupiny (10 a více žáků)</td><td>290/os</td><td class="no-unit">doprovod zdarma</td></tr>
                <tr><th>Rodinná nabídka</th><th colspan="2"></th></tr>
                <tr><td>Rodinná 2 dospělí + 1 dítě</td><td colspan="2">940</td></tr>
                <tr><td>Rodinná 2 dospělí + 2 děti</td><td colspan="2">1040</td></tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <table className="table table-bordered table-hover">
              <tbody>
                <tr><th>Vícedenní jízdné</th><th>Dospělí</th><th>Děti</th></tr>
                <tr><td>2 denní</td><td>390</td><td>290</td></tr>
                <tr><td>3 denní</td><td>390</td><td>290</td></tr>
                <tr><td>4 denní</td><td>390</td><td>290</td></tr>
                <tr><td>5 denní</td><td>390</td><td>290</td></tr>
                <tr><td>6 denní</td><td>390</td><td>290</td></tr>
                <tr><td>7 denní</td><td>390</td><td>290</td></tr>
                <tr><th>Bodové jízdné</th><th>Dospělí</th><th>Děti</th></tr>
                <tr><td>10 bodu</td><td>10</td><td>10</td></tr>
                <tr><td>100 bodu</td><td>100</td><td>100</td></tr>
             </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <table className="table table-bordered table-hover">
              <tbody>
              <tr><th colspan="2">Doplňující informace</th></tr>
              <tr><td colspan="2">Provozní doba je od 9:00 - 16:00, v únoru do 16:30</td></tr>
              <tr><td colspan="2">Vratná záloha na čipovou kartu je 50,- Kč.</td></tr>
              <tr><td colspan="2">Děti se počítají do výšky 130cm nebo do 12-ti let.</td></tr>
              <tr><td colspan="2">Čipová karta lze kdykoli dobíjet novými body - minimální dobití je 10 bodů.</td></tr>
              <tr><td colspan="2">Bodová nebo hodinová jízdenka platí po celou lyžařskou sezónu.</td></tr>
              <tr><th colspan="2">Odečet bodů</th></tr>
              <tr><td>POMA</td><td className="no-unit">30 bodu</td></tr>
              <tr><td>KOTVA</td><td className="no-unit">40 bodu</td></tr>
            </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

export default Component;
