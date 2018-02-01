import parentAppComponent from './parent-app.component';

const parentAppModule = angular.module('parent-app', [])

.component('parentApp', parentAppComponent)
.name;

export default parentAppModule;