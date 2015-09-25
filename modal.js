

angular.module('ModalModule', ['ui.bootstrap'])
    .controller('ModalController', function($scope, resolveTest, templateUrl) {
        $scope.controllerTest = "ModalController - success";
        $scope.resolveTest = resolveTest;
        $scope.templateUrl = templateUrl;

    })
    .factory('ModalService', function($modal) {

        return {
            openModal: function(aTemplateUrl) {

                $modal.open({
                    animation: true,
                    templateUrl: 'modalTemplate.html',
                    controller: 'ModalController',
                    backdrop: 'static',
                    keyboard: false,
                    size: 'sm',
                    resolve: {
                        resolveTest: function() {
                            return "resolve succeeded";
                        },
                        templateUrl: function() {
                            return aTemplateUrl;
                        }
                    }
                });
            }
        };

    });