import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import Content from './content/content';

const componentsModule = angular.module('components', [
  Navbar,
  Sidebar,
  Content
])
.name;

export default componentsModule;