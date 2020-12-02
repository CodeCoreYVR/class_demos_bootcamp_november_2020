// Library
class Book {
    constructor(title, [authors], edition) {
      this.title = title;
      this.authors = [authors];
      this.edition = edition;
    }
  }
  
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    shelve(book) {
      this.books.push(book);
      return this; // returning `this` makes shelve method chainable
    }
  
    
  } //Library Class Ends Here
  Library.prototype.findByTitle=function(title){
    let searchResults = [];
    for (let book of this.books) {
      if (book.title.toLowerCase().includes(title.toLowerCase())) {
        searchResults.push(book);
      }
    }
    return searchResults;
  }

  Library.prototype.list=function(){
    return this.books;
  }


  const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
  const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
  const theRustProgLang = new Book(
    "The Rust Programming Language",
    ["Steve Klabnik", "Carol Nichols"],
    2
  );
  

  const lib = new Library();
  lib
    .shelve(eloquentJS)
    .shelve(speakingJS)
    .shelve(theRustProgLang);
  
  console.log(lib.list());
  
  console.log(lib.findByTitle("javascript")); // this will return both javascript books