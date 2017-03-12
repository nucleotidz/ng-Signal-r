app.factory('Socket', function ($rootScope, $q) {
    var connection = $.hubConnection('http://localhost/API/signalr', { useDefaultPath: false });
    var Proxy = connection.createHubProxy('Socket');
    return {
        Connect: function () {
            connection.start({ withCredentials: false }).done(function () { });
        },
        Invoke: function (name, param) {
            Proxy.invoke(name, param)
        },
        Recive: function (eventname) {
            var defer = $q.defer();
            Proxy.on(eventname, function (result) {
                defer.resolve(result);
            });
            return defer.promise;
        }
    }

});