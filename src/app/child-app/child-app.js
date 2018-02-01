import childAppComponent from './child-app.component';
import Components from './components/components';

const childAppModule = angular.module('child-app', [Components])

.component('childApp', childAppComponent)
.config(function($stateProvider) {
    $stateProvider
        .state('child.first',
            {
                url: '/',
                component: `firstPage`
            })
        .state('child.second',
            {
                url: '/second',
                component: `secondPage`
            }); 
})
.name;

export default childAppModule;