(function () {
    'use strict';

    angular.module('courseViewer').factory('userAccountService', function ($http, apiBase) {
        var self = this;

        self.getUser = function (userName) {
            return $http.get(apiBase + 'user/' + encodeURIComponent(userName) + '/get')
                .then(result => result.data);
        }

        self.addUser = function (userModel) {
            return $http.post(apiBase + 'user/add', userModel)
                .then(result => result.data);
        }

        return this;
    });
})();
