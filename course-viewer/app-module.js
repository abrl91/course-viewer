(function () {
    'use strict';

    const appModule = angular.module('courseViewer', ['securityModule', 'ui.router']);

    appModule.value('apiBase', 'http://pluralsightcourseviewer.azurewebsites.net/api/courseviewer');

    appModule.run(function($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    });

    appModule.config(function ($stateProvider, $urlRouterProvider) {
       const states = [
           {
               name: 'home',
               url: '',
               template: '<home></home>'
           },
           {
               name: 'home2',
               url: '/',
               template: '<home></home>'
           },
           {
               name: 'courses',
               url: '/courses',
               template: '<course-list></course-list>'
           },
           {
             name: 'course',
             url: '/course/{courseId}',
             resolve: {
                 courseId: function ($stateParams) {
                     return $stateParams.courseId;
                 }
             },
             template: '<course course-id="$resolve.courseId"></course>'
           },
           {
               name: 'course.modules',
               url: '/modules',
               template: '<course-modules course="vm.course"></course-modules>'
           },
           {
               name: 'course.description',
               url: '/description',
               template: '<course-description course="vm.course"></course-description>'
           },
           {
               name: 'course.discussion',
               url: '/discussion',
               template: '<course-discussion course="vm.course"></course-discussion>'
           },
           {
               name: 'authors',
               url: '/authors',
               template: '<author-list></author-list>'
           }
       ];

       $urlRouterProvider.when('/course/:courseId', '/course/:courseId/modules');
       $urlRouterProvider.otherwise('/');

       states.forEach(state => $stateProvider.state(state));

    });
})();
