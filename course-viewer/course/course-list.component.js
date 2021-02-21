(function () {
    'use strict';

    angular.module('courseViewer').component('courseList', {
        controllerAs: 'vm',
        controller: function (apiBase, $http) {
            const vm = this;

            vm.courses = null;

            vm.$onInit = function () {
                $http.get(`${apiBase}/courses`)
                    .then(res => {
                        vm.courses = res.data
                    });
            }
        },
        templateUrl: 'course-viewer/course/course-list.component.html'
    });
})();
