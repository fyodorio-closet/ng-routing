import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-route';
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
    'ngRoute',
    Components,
    ParentApp,
    ChildApp,
    Services
])

.component('app', AppComponent)
.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
            {template: `<parent-app></parent-app>`})
        .when('/child', 
            {template: `<child-app></child-app>`});
    $locationProvider.html5Mode(true);
});

export default appModule;