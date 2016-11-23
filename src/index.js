import angular from 'angular';

import booksFinderModule from './app/containers/BooksFinder/BooksFinder.js';
import bookDetailsModule from './app/containers/BookDetails/BookDetails.js';
import bookServiceModule from './app/service/book/book.js';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app = 'books';

const dependecies = [
  'ui.router',
  bookServiceModule.name,
  booksFinderModule.name,
  bookDetailsModule.name
];

angular
  .module(app, dependecies)
  .config(routesConfig);
