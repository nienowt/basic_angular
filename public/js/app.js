'use strict';

var app = angular.module('app', []);
app.controller('GuestController', function() {
  this.name = 'Guest';
  this.click = function() {
    return this.name = 'to the void';
  };
});
