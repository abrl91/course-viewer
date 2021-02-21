(function () {
    'use strict';

    angular.module('courseViewer').factory('authorService', function (apiBase, $http) {
       const self = this;

       self.getAllAuthors = function () {
           return $http.get(`${apiBase}/authors`)
               .then(res => res.data);
       }

       self.getAuthor = function (authorId) {
           return $http.get(`${apiBase}/author/${authorId}`)
               .then(res => res.data);
       }

       return this;
    });
})();
