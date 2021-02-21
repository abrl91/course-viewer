(function () {
    'use strict';

    angular.module('courseViewer').component('authorList', {
        bindings: {
        },
        controllerAs: 'vm',
        controller: function (apiBase, $http) {
            var vm = this;

            vm.authors = null;

            vm.$onInit = function () {
                $http.get(`${apiBase}/authors`)
                    .then(res => {
                       vm.authors = res.data;
                    });
            }
        },
        templateUrl: 'course-viewer/author/author-list.component.html'
    });
})();
