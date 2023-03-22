

export default class Booklist {
    constructor(bookListName = '', booksRead = [], booksUnread = [], currentBooks = []) {
        this.bookListName = bookListName;
        this.booksRead = booksRead;
        this.booksRead = booksUnread;
        this.currentBooks = currentBooks;


    }
    add(book) {
        this.currentBooks.push(book)
        return this.currentBooks
        // call book and push title into "current books" array
    };
    sortReadBook(book) {

        return
        // sort "current books" array alphabetically and remove "booksUnread"
    }
    sortUnReadBook(book) {
        return
        // sort "current books" array alphabetically and remove "booksUnread"
    }

    finishCurrentBook(book) {
        return
        //
    }

}

// number of books read
// number of books unread
// all the current books

//methods:
// addBook(book)
// finishCurrentBook()


// let winterReadingList = new Booklist
// let summerReadingList = new Booklist

//title
//genre
//author
// "has been read" property (boolean value)

// console.log(winterReadingList.add(artOfWar))

// winterReadingList.add(artOfWar)
// winterReadingList.add(nativeSon)
// winterReadingList.add(book2)
// console.log(winterReadingList.currentBooks)


// summerReadingList.add(artOfWar)
// summerReadingList.add(nativeSon)

