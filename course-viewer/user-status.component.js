(function () {
    'use strict';

    angular.module('courseViewer').component('userStatus', {
        controllerAs: 'vm',
        controller: function (userAccountService, authenticationService) {
            const vm = this;

            vm.fullName = '';

            const getUser = function (userName) {
                userAccountService.getUser(userName)
                    .then(user => {
                        vm.fullName = `${user.firstName} ${user.lastName}`;
                    })
            }

            vm.$onInit = function () {
                if (authenticationService.loggedIn) {
                    getUser(authenticationService.userName);
                }
            }

            vm.postRegister = function (registerResponse, cb) {
                userAccountService.addUser(registerResponse)
                    .then(user => {
                        if (cb !== null) {
                            cb();
                        }
                    });
            }

            vm.postLogin = function (loginResponse) {
                getUser(loginResponse)
            }

        },
        templateUrl: 'course-viewer/user-status.component.html'
    });
})();
