app.factory('API', function ($resource) {
    return $resource('', {}, {
        GetAccount: {
            method: "GET",
            url: "http://localhost/API/API/Account/Get",
            isArray: true,
        },
        CreateAccount: {
            method: "POST",
            url: "http://localhost/API/API/Account/Save",
            isArray: false,
            param: {}
        }

    });
});