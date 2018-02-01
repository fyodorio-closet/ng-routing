import FirstPage from './first-page/first-page';
import SecondPage from './second-page/second-page';
import Abstract from './abstract/abstract';

const componentsModule = angular.module('child-components', [
  FirstPage,
  SecondPage,
  Abstract
])
.name;

export default componentsModule;