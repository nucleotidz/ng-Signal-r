app.controller('AlfrescoController', ['$scope', '$state', '$http', '$stateParams',
function ($scope, $state, $http, $stateParams) {
    var vm = this;
    vm.workflow = {};
    function Bind() {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/alfresco/s/api/task-instances?alf_ticket=TICKET_181070eb597a9730b161f4d56649bc5badd416e9'
        }).then(function successCallback(response) {
            // alert("hello");
            vm.workflow = response.data.data
        }, function errorCallback(response) {
            alert('Error');
        });
    }
    vm.Details = function (workflowId) {
        $state.go("Home.Details", { "WorkFlowID": workflowId })
    };
    vm.Back = function () {       
        
        $state.go("Home")
    }
    vm.End = function (workflowId) {      
          
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/alfresco/s/api/workflow/task/end/' + workflowId + '?alf_ticket=TICKET_181070eb597a9730b161f4d56649bc5badd416e9'
        }).then(function successCallback(response) {
            alert('Success');
        }, function errorCallback(response) {
            alert('Error');
        });
    }
    vm.EndWf = function (workflowId) {
        $http({
            method: 'DELETE',
            url: ' http://127.0.0.1:8080/alfresco/s/api/workflow-instances/' + workflowId + '?alf_ticket=TICKET_181070eb597a9730b161f4d56649bc5badd416e9'
        }).then(function successCallback(response) {
            alert('Success');
        }, function errorCallback(response) {
            alert('Error');
        });

    }
    Bind();
}]);

