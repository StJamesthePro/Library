export default
    class Library {
    constructor(branchName, BookLists = [], cardHolders = []) {
        this.branchName = branchName;
        this.BookLists = BookLists;
        this.cardHolders = cardHolders;
    }
    registerNewCardholder(cardHolders) {
        this.cardHolders.push(cardHolders);
    }

    intakeBookList(BookLists) {
        this.BookLists.push(BookLists);
    }

    issueBookToCardholder(book, cardholder) {
        book.isAvailable = false;
        cardholder.booksCheckOutHistory.push(book);
        // console.log(`Thank You For checking out ${book.title}`)
        // cardholder.booksCheckOutHistory.push(book)
    }
    removeObjectWithId(branchName, booknumber) {
        const objWithIdIndex = branchName.BookLists.findIndex((book) => book.booknumber === booknumber);


        if (objWithIdIndex > -1) {
            this.BookLists.splice(objWithIdIndex, 1);
        }

        console.log(this.BookLists)
        return this.BookLists;
    }



}

