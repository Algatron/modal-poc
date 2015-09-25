/**
 * Created by Algatron on 9/24/2015.
 */


angular.module("App", ['MrModal'])
    .controller("appController",
        function($scope, ModalService) {

            $scope.openModal = function() {
                ModalService.openModal();
            };


        }
);