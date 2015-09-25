/**
 * Created by Algatron on 9/24/2015.
 */

angular.module('MrModal', ['ui.bootstrap'])
    .controller('modalController', function($scope) {

    })
    .factory('ModalService', function($modal) {

        return {
            openModal: function() {
                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'modalTemplate.html',
                    controller: 'modalController',
                    size: 'sm'
                });
            }
        };



    });