(function () {
    'use strict';

    angular.module('courseViewer').factory('courseService', function (apiBase, $http) {

        const self = this;

        self.getAllCourses = function () {
            return $http.get(`${apiBase}/courses`)
                .then(res => res.data);
        }

        self.getCourse = function (courseId) {
            return $http.get(`${apiBase}/course/${courseId}/full`)
                .then(res => res.data);
        }
        
        return this;
    });
})();
