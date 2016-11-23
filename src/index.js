import angular from 'angular';

import {App} from './app/containers/App/App.js';
import booksFinderModule from './app/containers/BooksFinder/BooksFinder.js';
import bookServiceModule from './app/service/book/book.js';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css';
import routesConfig from './routes';

import './index.scss';

export const app = 'books';

const dependecies = [
  'ui.router',
  'ngMaterial',
  bookServiceModule.name,
  booksFinderModule.name
];

angular
  .module(app, dependecies)
  .config(routesConfig)
  .component('app', App);
