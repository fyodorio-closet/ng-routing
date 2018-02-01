import firstPageComponent from './first-page.component';

const firstPageModule = angular.module('first-page', [])

.component('firstPage', firstPageComponent)
.name;

export default firstPageModule;