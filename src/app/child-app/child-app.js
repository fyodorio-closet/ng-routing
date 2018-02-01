import uiRouter from '@uirouter/angularjs';
import childAppComponent from './child-app.component';
import Components from './components/components';

const childAppModule = angular.module('child-app', [uiRouter, Components])

.component('childApp', childAppComponent)
.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('abstract', 
            {
                abstract: true,
                url: '/',
                component: 'abstract'
            })
        .state('abstract.first',
            {
                url: '^/child',
                component: `firstPage`
            })
        .state('abstract.second',
            {
                url: '^/child',
                component: `secondPage`
            }); 
})
.name;

export default childAppModule;