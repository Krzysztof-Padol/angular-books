import angular from 'angular';

import {App} from './app/containers/App/App.js';
import {booksFinder} from './app/containers/BooksFinder/BooksFinder.js';
import {moduleName} from './app/service/book/book.js';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css';
import routesConfig from './routes';

import './index.scss';

export const app = 'books';

angular
  .module(app, ['ui.router', 'ngMaterial', moduleName])
  .config(routesConfig)
  .component('booksFinder', booksFinder)
  .component('app', App);
