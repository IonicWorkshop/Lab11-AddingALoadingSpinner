angular.module('starter')
    .controller('ContactsCtrl', function ($scope, ContactsService) {
        $scope.contacts = [];

        ContactsService.GetContacts()
            .then(function(items){
            $scope.contacts = items;
            console.log(items);
        });

        $scope.doRefresh = function () {
            ContactsService.GetNewContact().then(function(item){
                $scope.contacts = $scope.contacts.concat(item);
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            })
        };
    });