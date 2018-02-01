import abstractComponent from './abstract.component';

const abstractModule = angular.module('abstract', [])

.component('abstract', abstractComponent)
.name;

export default abstractModule;