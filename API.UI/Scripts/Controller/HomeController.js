app.controller('HomeController', ['$scope', '$rootScope', '$http', 
function ($scope, $rootScope, $http) {   
    var vm = this;
    var connection = $.hubConnection('http://localhost/API/signalr', { useDefaultPath: false });
    var Proxy = connection.createHubProxy('Socket');
    connection.start({ withCredentials: false }).done(function () {
        alert("Connection-Established-With-Server::at port 52070")
    });
    vm.Add = function () {
        Proxy.invoke("Refresh", "Ahmar");
    }
    Proxy.on('Refresh', function (message) {
        alert(message)
    });
}]);