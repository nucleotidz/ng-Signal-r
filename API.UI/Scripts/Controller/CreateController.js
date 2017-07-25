app.controller('CreateController', ['$scope', '$rootScope', 'API', '$q', '$state', 'Socket','$state',
function ($scope, $rootScope, API, $q, $state, Socket) {
    var vm = this;
    vm.AccountModel = {
        Name: "",
        AccountNumber: "",
        Amount: "",
    }   
    vm.AddAccount = function () {
        var data = API.CreateAccount(vm.AccountModel);
        $q.all([data.$promise]).then(function (response) {
            console.log(response);
            //Handle Resopnse from the service .
        });    
    }
    vm.Back = function () {
        $state.go("Home")
    }
   
}]);