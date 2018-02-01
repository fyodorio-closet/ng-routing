import FirstPage from './first-page/first-page';
import SecondPage from './second-page/second-page';

const componentsModule = angular.module('child-components', [
  FirstPage,
  SecondPage
])
.name;

export default componentsModule;