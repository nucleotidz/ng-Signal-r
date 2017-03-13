//app.factory('Socket', function ($rootScope) {
app.factory('Socket', ['$rootScope', function ($rootScope) {

    function SocketFactory() {
        var connection = $.hubConnection('http://localhost/API/signalr', { useDefaultPath: false });
        connection.connectionSlow(function () {
            console.log('We are currently experiencing difficulties with the connection.')
        });
        connection.disconnected(function () {
            console.log('Disconnected from the server')
        });
        connection.reconnected(function () {
            console.log('Reconnected from the server :)')
        });       
        var proxy = connection.createHubProxy('Socket');
        connection.start({ transport: ['longPolling','serverSentEvents', 'webSockets'] }).done(function (event) {
            console.log("Connection Estabalished with " + event.host + " Connected, transport = " + connection.transport.name);
        }).fail(function (event) {
            console.log(event.toString());
        });
        connection.error(function (error) {
            console.log('SignalR error: ' + error)
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