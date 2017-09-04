
'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should instatiate the controller...', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

    // Verifico che esista (sia definita) la propery textVisible
    it('should have a textVisible property', inject(function($controller) {
      var view2Ctrl = $controller('View2Ctrl', {});
    }));    

    // Verifico che il valore della propery textVisible sia falso
    it('should have a textVisible property set to false', inject(function($controller) {
      var view2Ctrl = $controller('View2Ctrl', {});
      expect(view2Ctrl.textVisible).toBeTruthy();
    })); 
    
    // Modifico il valore della propery textVisible a true
    it('should change the textVisible property to true', inject(function($controller) {
      var view2Ctrl = $controller('View2ctrl', {});
      view2Ctrl.click();
      expect(view2Ctrl.textVisible).toBeTruthy();
    }));  

  });
});