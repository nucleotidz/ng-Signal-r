//app.factory('Socket', function ($rootScope) {
app.factory('Socket', ['$rootScope', function ($rootScope) {

    function SocketFactory() {
        var connection = $.hubConnection('http://localhost/API/signalr', { useDefaultPath: false });
        var proxy = connection.createHubProxy('Socket');

        connection.start().done(function () {
        });

        return {
            on: function (eventName, callback) {
                proxy.on(eventName, function (result) {
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback(result);
                        }
                    });
                });
            },
            invoke: function (methodName, param) {
                if (param != undefined) {
                    proxy.invoke(methodName, param)
                }
                else {
                    proxy.invoke(methodName);
                }

            }
        };
    };

    return SocketFactory;
}]);