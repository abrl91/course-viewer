(function () {
    'use strict';

    angular.module('courseViewer').component('course', {
        controllerAs: 'vm',
        bindings: {
          courseId: '<'
        },
        controller: function () {
            const vm = this;

            vm.$onInit = function () {
                vm.course = {
                    CourseId: vm.courseId
                }
            };
        },
        templateUrl: 'course-viewer/course/course.component.html'
    });
})();
