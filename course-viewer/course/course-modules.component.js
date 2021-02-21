(function () {
    'use strict';

    angular.module('courseViewer').component('courseModules', {
        bindings: {
          course: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            const vm = this;
        },
        templateUrl: 'course-viewer/course/course-modules.component.html'
    });
})();
