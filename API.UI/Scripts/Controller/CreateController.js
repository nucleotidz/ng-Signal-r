app.controller('CreateController', ['$scope', '$rootScope', 'API', '$q', '$state', 'Socket',
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
            Socket.Invoke("Refresh", "Ahmar")
          
        });
     
    }

}]);