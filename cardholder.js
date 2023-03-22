export default
    class CardHolder {
    constructor(name, primaryBranch, cardNumber, booksCheckOutHistory = []) {
        this.name = name;
        this.primaryBranch = primaryBranch;
        this.cardNumber = cardNumber;
        this.booksCheckOutHistory = booksCheckOutHistory;
    }

    checkout(book, branchName) {
        branchName = branchName ? branchName : this.primaryBranch;
        branchName.issueBookToCardholder(book, this);
        branchName.removeObjectWithId(branchName, book.booknumber)
        console.log(`Thank You, ${this.name}, For Checking out ${book.title}`)
    }
}