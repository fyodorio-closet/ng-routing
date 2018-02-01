import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import uiRouter from '@uirouter/angularjs';
import Components from './components/components';
import ParentApp from './components/parent-app/parent-app';
import ChildApp from './child-app/child-app'
import Services from './services/services';
import AppComponent from './app.component';

const appModule = angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngMaterial',
    uiRouter,
    Components,
    ParentApp,
    ChildApp,
    Services
])

.component('app', AppComponent)
.config(function($stateProvider, $locationProvider) {
    $stateProvider
        .state('parent',
            {
                url: '/',
                template: `<parent-app></parent-app>`
            })
        .state('child', 
            {
                url: '/child',
                template: `<child-app></child-app>`
            });
    $locationProvider.html5Mode(true);
});

export default appModule;