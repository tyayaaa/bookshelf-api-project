const {
  addBookHandler,
  getAllBookHandler,
  getBookDetailHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  { // menyimpan buku
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  { // menampilkan semua buku
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },

  { // menampilkan detail buku
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailHandler,
  },

  { // edit detail buku
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },

  { // hapus buku
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
