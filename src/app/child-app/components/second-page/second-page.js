import secondPageComponent from './second-page.component';

const secondPageModule = angular.module('second-page', [])

.component('secondPage', secondPageComponent)
.name;

export default secondPageModule;