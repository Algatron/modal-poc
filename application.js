
angular.module("App", ['MyModule'])
    .controller("AppController",
        function($scope, MyModuleTrigger) {
            $scope.controllerTest = "AppController - success";
            $scope.triggerModule = function() {
                MyModuleTrigger.trigger();
            };
        }
    );
