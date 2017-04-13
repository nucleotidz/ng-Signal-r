app.controller('AlfrescoController', ['$scope', '$state', '$http', '$stateParams',
function ($scope, $state, $http, $stateParams) {
    var vm = this;
    vm.workflow = {};
    function Bind() {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/alfresco/s/api/task-instances?alf_ticket=TICKET_3664848cddd54fd78a97b84f0d69c8537221112d'
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
    vm.Create = function () {
        var wf_Data = { "prop_bpm_workflowDescription": "test2 ", "prop_bpm_workflowDueDate": "2017-04-15", "prop_bpm_workflowPriority": "2", "assoc_bpm_assignee_added": "workspace://SpacesStore/f2710708-2e97-4095-901b-2eccb0c248b6", "assoc_bpm_assignee_removed": "", "assoc_packageItems_added": "", "assoc_packageItems_removed": "", "prop_bpm_sendEMailNotifications": "false" }
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/share/proxy/alfresco/api/workflow/activiti$activitiAdhoc/formprocessor?alf_ticket=TICKET_3664848cddd54fd78a97b84f0d69c8537221112d',
            data: wf_Data
        }).then(function successCallback(response) {
            alert('hi');
        }, function errorCallback(response) {
            alert('Error');
        });
    }
    Bind();
}]);

