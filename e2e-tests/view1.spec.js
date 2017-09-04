describe('myApp.view1 view', function() {

  beforeAll(function() {
    browser.get('http://localhost:8000/#!/view1');
  });

  it('Expect a link 1', function () {
    var view1Link = $('[href*=view1]');
    expect(view1Link.isDisplayed()).toBe(true);
  });

  it('Expect a link 2', function () {
    var view2Link = $('[href*=view2]');
    expect(view2Link.isDisplayed()).toBe(true);
  });

  it('Click the link', function () {
    var view1Link = $('[href*=view1]');
    var view2Link = $('[href*=view2]');
    // Click sul link per cambiare view
    view2Link.click();
    var btn = element(by.css('button[ng-click="ctrl.clickTheButton()"'));
    browser.wait(
      protractor.ExpectedConditions.visibilityOf(btn), 5000);
    
    expect(btn.isDisplayed()).toBe(true);
  });

});