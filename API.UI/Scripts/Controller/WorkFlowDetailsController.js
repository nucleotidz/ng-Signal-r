app.controller('WorkFlowDetailsController', ['$scope', '$state', '$http', '$stateParams',
function ($scope, $state, $http, $stateParams) {
    var vm = this;
    vm.Properties = {};
    vm.workflowInstance = {};
    var activityId = $stateParams.WorkFlowID;
    function Bind() {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/alfresco/s/api/task-instances/' + activityId + '?alf_ticket=TICKET_181070eb597a9730b161f4d56649bc5badd416e9'
        }).then(function successCallback(response) {
            vm.Properties = response.data.data
        }, function errorCallback(response) {
            alert('Error');
        });
    }
    Bind();
    vm.Back = function () {
        $state.go("Home.Alfresco")
    }
}]);