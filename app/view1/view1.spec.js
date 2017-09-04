'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    // Istanzio il controller
    it('should exists a View1Ctrl controller', inject(function($rootScope, $controller) {
      var view1Ctrl = $controller('View1Ctrl', {});
      expect(view1Ctrl).toBeDefined();
    }));

    // Verifico che esista la propery users
    it('should have a users property', inject(function($rootScope, $controller) {
      var view1Ctrl = $controller('View1Ctrl', {});
      expect(view1Ctrl.users).toBeDefined();
    }));    

    // Controllo che esista un certo elemento nella properietà users che abbia first_name = Hamilton
    //
    // La property users è un array di object così strutturato:
    //  {
    //    "id": "3a509a38-699f-4012-b2e1-1da21c679ae4", "first_name": "Elwood", "last_name": "Blues"},
    //    "id": "4b673a38-111f-4012-b2e1-1da21c679ae5", "first_name": "John", "last_name": "Blues"}
    //  }
    //
    it('should exists user with first_name equal to Hamilton', inject(function($rootScope, $controller) {
      var view1Ctrl = $controller('View1Ctrl', {}); 
      expect(view1Ctrl.users[0].first_name).toEqual('Hamilton');
    }));    

    // Verifico che il metodo getUser funzioni
    it('should exists a getUser method and return a specific user', inject(function($rootScope, $controller) {
      var view1Ctrl = $controller('View1Ctrl', {});
      var userID = '7095d4a2-5f13-4274-896c-ddc768791d5c';
      var user = view1Ctrl.getUser(userID);
      expect(user.id).toEqual(userID);
    }));

    
  });
});