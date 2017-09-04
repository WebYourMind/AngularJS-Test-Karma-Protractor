/*
describe('myApp.view2 module', function () {

  beforeAll(function() {
    browser.get('http://localhost:8000/#!/view2');
  });

  it('Expect the button', function () {
    var btn = element(by.css('button[ng-submit="ctrl.clickTheButton()"'));
    browser.wait(
      protractor.ExpectedConditions.visibilityOf(btn), 5000);
      expect(btn.isDisplayed()).toBe(true);
  });

  it('Change the text and show the text', function () {
    var inputField = element(by.model('ctrl.text'));
    // Resetta il contenuto del campo
        
    // invia un testo al campo
    inputField.sendKeys('Testo di tset');
    
    // Clicco il bottone 
    var btn = element(by.css('button[ng-click="ctrl.clickTheButton()"')).click();
    // Verifico che il testo sia visibile
    var text = element(by.css('text'));
    browser.wait(
      protractor.ExpectedConditions.visibilityOf(text), 5000);
      expect(btn.isDisplayed()).toBe(true);
  });

  it('Expect the text is "Testo di test"', function () {
      var text = element(by.id('text'));
      // getText restituisce una promise
      text.getText().then(function(testo) {
          //console.log('Valore element [%s]', testo);
      });      
      expect(text.getText()).toEqual('Testo di test');
  });  

});
*/