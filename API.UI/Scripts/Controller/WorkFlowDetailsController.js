app.controller('WorkFlowDetailsController', ['$scope', '$state', '$http','$stateParams',
function ($scope, $state, $http, $stateParams) {
    var vm = this;
    vm.Properties = {};
    vm.workflowInstance = {};
    var activityId = $stateParams.WorkflowId;
}]);