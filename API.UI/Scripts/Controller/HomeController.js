app.controller('HomeController', ['$scope', '$rootScope', 'API','$q' ,'$state','Socket',
function ($scope, $rootScope, API, $q, $state, Socket) {
    var vm = this;
    vm.Account = {};
    init();
    var soc = Socket();
    soc.on('Refresh', function (data) {
        init();
    });
    soc.on('Delete', function (data) {
        init();
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
            soc.invoke("Delete")
            init();
        });
    }

}]);