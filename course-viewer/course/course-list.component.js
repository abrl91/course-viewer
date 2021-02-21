(function () {
    'use strict';

    angular.module('courseViewer').component('courseList', {
        controllerAs: 'vm',
        controller: function (courseService) {
            const vm = this;

            vm.courses = null;

            vm.$onInit = function () {
                courseService.getAllCourses()
                    .then(courses => vm.courses = courses);
            }
        },
        templateUrl: 'course-viewer/course/course-list.component.html'
    });
})();
