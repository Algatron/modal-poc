
angular.module('MyModule', ['ModalModule'])
    .factory('MyModuleTrigger', function(ModalService) {
        return {
            trigger: function() {
                ModalService.openModal("customTemplate.html");
            }
        }
    })
    .controller('MyModuleModalController', function($scope) {

    });