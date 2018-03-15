import React from 'react';
import 'assets/scss/rent.scss';
import PageTitle from 'components/page-title';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="page price-list">
        <PageTitle title="Půjčovna a lyžařská škola" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr><th>Doba půjčení</th><th>Cena za komplet</th></tr>
                  <tr><td>Dopoledne od 09:00 do 12:30</td><td>250</td></tr>
                  <tr><td>Odpoledne od 12:30 do 16:00</td><td>250</td></tr>
                  <tr><td>Celodenní</td><td>300</td></tr>
                  <tr><td>Vícedenní (cena za 1 den)</td><td>250</td></tr>
                  <tr><th colspan="2">Doplňující informace</th></tr>
                  <tr><td colspan="2">K dispozici je kompletní vybavení na SNOWBOARD či LYŽE.</td></tr>
                  <tr><td colspan="2">Nutny alespoň jeden doklad totožnosti.</td></tr>
                  <tr><td colspan="2">Odpovědnost za nadměrné opotřebení, poškození či zrátu nese nájemce.</td></tr>
                  <tr><td colspan="2">Helma k půjčenému setu je zdarma.</td></tr>
                  <tr><th colspan="2">Kontakt</th></tr>
                  <tr><td colspan="2"><a href="mailto:pujcovna@levnevleky.cz?subject=Dotaz">pujcovna@levnevleky.cz</a></td></tr>
                  <tr><td colspan="2">(+420) 722 901 501</td></tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6">
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr><th>Doba vyuky</th><th>Doba vyuky</th><th>Cena</th></tr>
                  <tr><td>1 osoba</td><td className="no-unit">1 hodina</td><td>490</td></tr>
                  <tr><td>1 osoba</td><td className="no-unit">2 hodina</td><td>980</td></tr>
                  <tr><td>1 osoba</td><td className="no-unit">3 hodina</td><td>1470</td></tr>
                  <tr><td>každá další osoba</td><td className="no-unit">1 hodina</td><td>+250</td></tr>
                  <tr><th colspan="3">Doplňující informace</th></tr>
                  <tr><td colspan="3">Při zakoupení lyžařské školy - skipass ZDARMA.</td></tr>
                  <tr><td colspan="3">Vyuka skupiny maximálně 6 osob.</td></tr>
                  <tr><td colspan="3">Pro školní a zájmové skupiny vyhotovíme speciální nabídku.</td></tr>
                  <tr><td colspan="3">Instruktor je trvale přítomen v areálu k dispozici na pokladně vleku.</td></tr>
                  <tr><th colspan="3">Kontakt</th></tr>
                  <tr><td colspan="3"><a href="mailto:skola@levnevleky.cz?subject=Dotaz">skola@levnevleky.cz</a></td></tr>
                  <tr><td colspan="3">(+420) 722 901 501</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Component;
