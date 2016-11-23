import angular from 'angular';
import 'angular-mocks';
import {moduleName} from './book';
import data from './mocks/exampleBookSet.json';

describe('Books service', () => {
  let BookService;

  beforeEach(() => {
    angular.mock.module(moduleName);
    angular.mock.inject(_BookService_ => {
      BookService = _BookService_;
      BookService.setData(data);
    });
  });

  describe('pagination getData method', () => {
    it('should return proper count of pages for data paginated with defaults value', () => {
      const value = BookService.getData();
      const expected = 1;
      expect(value.pages).toBe(expected);
    });

    it('should return proper length of elements for data paginated with defaults value', () => {
      const value = BookService.getData();
      const expected = 6;
      expect(value.elements.length).toBe(expected);
    });

    it('should return alphanumericaly sorted data of elements', () => {
      const value = BookService.getData();

      expect(value.elements[0].name).toBe('a');
      expect(value.elements[5].name).toBe('z');
    });

    it('should return proper count of pages for data with 2 itemsPerPage', () => {
      const value = BookService.getData(0, 2);
      const expected = 3;
      expect(value.pages).toBe(expected);
    });

    it('should return proper length of elements for data with 2 itemsPerPage', () => {
      const value = BookService.getData(0, 2);
      const expected = 2;
      expect(value.elements.length).toBe(expected);
    });

    it('should return proper elements for page 2 and 2 elements per page', () => {
      const value = BookService.getData(1, 2);
      expect(parseInt(value.elements[0].id, 10)).toBe(24);
      expect(parseInt(value.elements[1].id, 10)).toBe(25);
    });
  });

  describe('filter getData method', () => {
    it('should find proper elements for given filter genre values', () => {
      const filter = {
        genre: 'Fantasy'
      };
      const value = BookService.getData(0, 10, filter);
      const expected = 1;

      expect(value.elements.length).toBe(expected);
    });

    it('should find proper elements for given filter genre values', () => {
      const filter = {
        genre: 'History'
      };
      const value = BookService.getData(0, 10, filter);
      const expected = 2;

      expect(value.elements.length).toBe(expected);
    });

    it('should find proper elements for given filter category values', () => {
      const filter = {
        category: 'Non-Fiction'
      };
      const value = BookService.getData(0, 10, filter);
      const expected = 5;

      expect(value.elements.length).toBe(expected);
    });

    it('should find proper elements for given filter category values', () => {
      const filter = {
        category: 'History'
      };
      const value = BookService.getData(0, 10, filter);
      const expected = 0;

      expect(value.elements.length).toBe(expected);
    });
  });

  describe('search getData method', () => {
    it('should find all elements for given empty string in search text value', () => {
      const search = '';
      const value = BookService.getData(0, 10, false, search);
      const expected = 6;

      expect(value.elements.length).toBe(expected);
    });

    it('should find all elements with Laurence in name of autor', () => {
      const search = 'Laurence';
      const value = BookService.getData(0, 10, false, search);
      const expected = 3;

      expect(value.elements.length).toBe(expected);
    });

    it('should find all elements with contains a in name of autor and title', () => {
      const search = 'a';
      const value = BookService.getData(0, 10, false, search);
      const expected = 4;

      expect(value.elements.length).toBe(expected);
    });
  });

  describe('findById method', () => {
    it('should undefined when there is no element with passed id', () => {
      const value = BookService.findById('234231');
      const expected = undefined;
      expect(value).toBe(expected);
    });

    it('should return proper object', () => {
      const value = BookService.findById('25');
      const expected = '25';
      expect(value.id).toBe(expected);
    });
  });

  describe('getAllGenre method', () => {
    it('should return all unique genre', () => {
      const value = BookService.getAllGenre();
      const expected = 5;
      expect(value.length).toBe(expected);
    });

    it('should return all unique genre in alphanumerical order', () => {
      const value = BookService.getAllGenre();

      expect(value[0]).toBe('Arts');
      expect(value[4]).toBe('Technology');
    });
  });

  describe('getAllCategories method', () => {
    it('should return all unique genre', () => {
      const value = BookService.getAllCategories();
      const expected = 2;
      expect(value.length).toBe(expected);
    });

    it('should return all unique genre in alphanumerical order', () => {
      const value = BookService.getAllCategories();

      expect(value[0]).toBe('Fiction');
      expect(value[1]).toBe('Non-Fiction');
    });
  });
});
