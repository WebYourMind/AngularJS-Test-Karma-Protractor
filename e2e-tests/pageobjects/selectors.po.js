'use strict';
module.exports = {

    timeout: 5000,

    view1Link:  $('[href*=view1]'),

    view2Link: $('[href*=view2]'),
    
    clickMeBtn: element(by.css('button[ng-click="ctrl.clickTheButton()"')),

    inputField: element(by.model('ctrl.text')),

    text: element(by.id('text')),

}