import books from './book.json';

export const initialBook = books.sort((bookA, bookB) => {
  return bookA.id - bookB.id;
});

function filterData(booksSet, category = '', genre = '') {
  return booksSet.filter(book => {
    return book.genre.name === genre || book.genre.category === category;
  });
}

function searchData(booksSet, searchTxt) {
  return booksSet.filter(book => {
    return book.name.indexOf(searchTxt) !== -1 || book.author.name.indexOf(searchTxt) !== -1;
  });
}

function getSortFn(getValueFn = a => a) {
  return (a, b) => {
    return getValueFn(a).localeCompare(getValueFn(b));
  };
}

function getUnique(data, getValueFn = a => a) {
  const values = [];

  data.forEach(item => {
    if (values.indexOf(getValueFn(item)) === -1) {
      values.push(getValueFn(item));
    }
  });

  return values;
}

export class BookService {
  constructor() {
    this.data = initialBook;
  }

  setData(data) {
    this.data = data;
  }

  getAllGenre() {
    const genre = getUnique(this.data, item => item.genre.name);

    genre.sort(getSortFn());

    return genre;
  }

  getAllCategories() {
    const categories = getUnique(this.data, item => item.genre.category);

    categories.sort(getSortFn());

    return categories;
  }

  findById(id) {
    const booksSet = this.data.slice();

    return booksSet.find(book => {
      return book.id === id;
    });
  }

  getData(page = 0, itemsPerPage = 10, filter = false, search = false) {
    let booksSet = this.data.slice();

    booksSet.sort(getSortFn(a => a.name));

    if (filter) {
      booksSet = filterData(booksSet, filter.category, filter.genre);
    }

    if (search) {
      booksSet = searchData(booksSet, search);
    }

    return {
      elements: booksSet.slice(page * itemsPerPage, (page * itemsPerPage) + itemsPerPage),
      pages: Math.ceil(booksSet.length / itemsPerPage)
    };
  }
}

export const moduleName = 'resources.books';

export default angular
  .module(moduleName, [])
  .service('BookService', BookService);