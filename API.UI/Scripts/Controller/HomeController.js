app.controller('HomeController', ['$scope', '$rootScope', 'API', '$q', '$state', 'Socket', '$http',
function ($scope, $rootScope, API, $q, $state, Socket, $http) {
    var vm = this;
    vm.Account = {};
    init();
    var soc = Socket();
    soc.on('Refresh', function (data) {
        vm.Account = data;
    });
    function init() {
        var data = API.GetAccount({});
        $q.all([data.$promise]).then(function (response) {
            vm.Account = response[0];
        });

    }
    vm.Add = function () {
        $state.go('.Create');
    }
    vm.Delete = function (account) {
        var data = API.DeleteAccount({ 'AccountNumber': account });
        $q.all([data.$promise]).then(function (response) {
            init();
        });
    }
    vm.Get = function () {
        $state.go('.Alfresco');
    }

}]);