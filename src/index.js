import angular from 'angular';

import {hello} from './app/hello';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css';
import routesConfig from './routes';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ngMaterial'])
  .config(routesConfig)
  .component('app', hello);
