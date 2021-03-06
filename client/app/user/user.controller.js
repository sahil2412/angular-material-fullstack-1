'use strict';

/**
 * Main Controller for the Angular Material Starter App
 * @param $scope
 * @param $mdSidenav
 * @param avatarsService
 * @constructor
 */
angular
  .module('angularMaterialFullstackApp')
  .controller('UserController', function($scope, $mdBottomSheet, $log) {
    $scope.makeContact  = makeContact;
    $scope.user = {
      icon: 'svg-1',
      name: 'User name',
      content: 'content'
    };

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact() {
      $mdBottomSheet.show({
        controllerAs  : "cp",
        templateUrl   : 'app/user/user.contact.sheet.html',
        controller    : [ '$mdBottomSheet', ContactSheetController],
        parent        : angular.element(document.getElementById('content'))
      }).then(function(clickedItem) {
        $log.debug( clickedItem + ' clicked!');
      });

      /**
       * User ContactSheet controller
       */
      function ContactSheetController( $mdBottomSheet ) {
        this.user = $scope.user;
        this.actions = [
          { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
          { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
          { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
          { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
        ];
        this.contactUser = function(action) {
          // The actually contact process has not been implemented...
          // so just hide the bottomSheet

          $mdBottomSheet.hide(action);
        };
      }
    }

  });
