app.service('TextFileReader', [
    '$http',
    '$rootScope',
    function($http, $rootScope) {
        return {
            getText: function(url) {
                return $http.get(url)
                    .then(function(response) {
                        return response.data;
                    }, function(response) {
                        var promise = errorPromise(response);
                        return promise;
                    });
            }
        };
    }
]);