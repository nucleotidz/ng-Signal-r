var app = angular.module("ApplicationModule", ["ui.router", "ngResource"]).run(['Socket', function (Socket) {
    Socket.Connect();
}]);
