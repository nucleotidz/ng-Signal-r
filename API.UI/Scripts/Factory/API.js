﻿app.factory('API', function ($resource) {
    return $resource('', {}, {
        GetAccount: {
            method: "GET",
            url: "http://localhost:52104/API/Account/Get",
            isArray: true,
        },
        CreateAccount: {
            method: "POST",
            url: "http://localhost:52104/API/Account/Save",
            isArray: false,
            param: {}
        }, DeleteAccount: {
            method: "GET",
            url: "http://localhost:52104/API/Account/Delete/Account/:AccountNumber",
            isArray: false,            
        }

    });
});


