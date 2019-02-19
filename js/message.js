$(document).ready(function() {});

function showMessage(type, details) {
  var modal = $('#modal-info');

  switch(type) {
    case 'message-success':
      setModalData(modal, "Zpráva", `
        Děkujeme za zprávu.<br>
        Budeme Vás kontaktovat na email ihned, jak to bude možné.<br>
      `);
      break;

    case 'message-failure':
      setModalData(modal, "Chyba odeslání zprávy", `
        Zprávu se nepodařilo odeslat.
        Zkotrolujte, zda máte správně vyplněný formulář z zkuste to znovu.<br>
        V případě dalšího selhání nás kontaktujte, prosím, přímo na emailu - info@skiareal-krkonose.cz.<br>
        Děkujeme.<br>
        <br>
        Detail chyby: ` + JSON.stringify(details) + `
      `);
      break;
  }
  modal.modal('show');
}

function setModalData(modal, title, body) {
  modal.find(".modal-title").text(title);
  modal.find(".modal-text").html(body);
}
