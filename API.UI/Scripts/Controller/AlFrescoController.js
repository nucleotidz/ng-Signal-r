app.controller('AlfrescoController', ['$scope', '$state', '$http',
function ($scope, $state, $http) {
    var vm = this;
    vm.workflow = {};
    function Bind() {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/alfresco/service/api/workflow-definitions?alf_ticket=TICKET_ddb82adf00670cace6046f3bedcfc003e8e7c4ff'
        }).then(function successCallback(response) {
            vm.workflow = response.data.data
        }, function errorCallback(response) {
            alert('Error');
        });
    }
    vm.Delete = function (workflowId) {
        $http.delete('http://127.0.0.1:8080/alfresco/service/api/workflow-definitions/' + workflowId + '?alf_ticket=TICKET_ddb82adf00670cace6046f3bedcfc003e8e7c4ff').
            success(function (data, status) {
                Bind();
            });
    };
    Bind();
}]);