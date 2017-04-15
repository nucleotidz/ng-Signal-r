app.controller('FoldersController', ['$scope', '$state', '$http', '$stateParams',
function ($scope, $state, $http, $stateParams) {
    var vm = this;
    vm.Folder = {
        Name: ""
    }
    vm.CFolder = {
        Path: "",
        Name: "",
    }
    vm.Documents = {

    };
    vm.Subfolders = {}
    vm.folders = {}
    vm.AddCFolders = function () {
        var folder = {
            name: vm.CFolder.Name,
            title: vm.Folder.Name,
            description: vm.Folder.Name,
            type: "cm:folder"
        }
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/alfresco/s/api/site/folder/ahmar/documentLibrary/' + vm.CFolder.Path + '?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',
            data: folder
        }).then(function successCallback(response) {

        }, function errorCallback(response) {
            alert('hi');
        });
    }
    vm.AddFolders = function () {
        var folder = {
            name: vm.Folder.Name,
            title: vm.Folder.Name,
            description: vm.Folder.Name,
            type: "cm:folder"
        }
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/alfresco/s/api/site/folder/ahmar/documentLibrary?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',
            data: folder
        }).then(function successCallback(response) {

        }, function errorCallback(response) {
            alert('hi');
        });
    }
    function Bind() {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/alfresco/s/slingshot/datalists/lists/site/ahmar/documentLibrary?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',

        }).then(function successCallback(response) {
            vm.folders = response.data.datalists;
        }, function errorCallback(response) {

        });
    }
    vm.Details = function (name) {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/alfresco/s/slingshot/doclib/treenode/site/ahmar/documentLibrary/' + name + '?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',

        }).then(function successCallback(response) {
            vm.Subfolders = response.data.items;
        }, function errorCallback(response) {

        });
    }
    vm.Upload = function () {

        //"/CSC/HCLS/"
        var formData = new FormData()
        formData.append('filedata', $('#mFile')[0].files[0]);
        formData.append("siteId", "ahmar")
        formData.append("containerId", "documentLibrary")
        formData.append("uploaddirectory", "/CSC/HCLS/")

        var x = new XMLHttpRequest();
        x.open("POST", "http://127.0.0.1:8080/alfresco/s/api/upload?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376", true);

        x.send(formData);
    }
    vm.Checkout = function (name) {
        
      //  http://127.0.0.1:8080/alfresco/s/slingshot/doclib/action/checkout/site/ahmar/documentLibrary/CSC/HCLS/' + name + '?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/alfresco/service/slingshot/doclib/action/checkout/node/SpacesStore/966ce9b7-dc4b-4ba8-8594-dfc0419d1811/i?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',

        }).then(function successCallback(response) {
            var k = 0;
        }, function errorCallback(response) {
            var l = 0;
        });

    }
    vm.Checkin = function (name) {
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8080/alfresco/s/slingshot/doclib/action/checkin/site/ahmar/documentLibrary/CSC/HCLS/' + name + '?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',

        }).then(function successCallback(response) {
            var k = 0;
        }, function errorCallback(response) {
            var l = 0;
        });

    }
    vm.GetDocument = function () {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/alfresco/s/slingshot/doclib/doclist/1/site/ahmar/documentLibrary/CSC/HCLS?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',

        }).then(function successCallback(response) {
            vm.Documents = response.data.items;
        }, function errorCallback(response) {
            var l = 0;
        });

    }
    vm.Delete = function (name) {
       
        $http({
            method: 'DELETE',
            url: 'http://127.0.0.1:8080/alfresco/s/slingshot/doclib/action/file/site/ahmar/documentLibrary/CSC/HCLS/' + name + '/?alf_ticket=TICKET_cb9004336b29e83bfb049ebd40f2cf6805430376',

        }).then(function successCallback(response) {
            vm.Documents = response.data.items;
        }, function errorCallback(response) {
            var l = 0;
        });
    }
    Bind();
}]);