export default class Book {
    constructor(title = '', genre = '', author = '', currentpage = 0, totalNumberOfPages, isAvailable = true, booknumber) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.currentpage = currentpage
        this.totalNumberOfPages = totalNumberOfPages
        this.isAvailable = isAvailable;
        this.booknumber = booknumber
    }

    readingSession(pages) {
        this.currentpage += pages;
        return this.currentpage
    }

}


// let artOfWar = new Book(`Art of War`, 'Self-Help', 'SunTzu', 48, 100, false);
// let book2 = new Book(`Dark Psychology`, 'Politics & Science', 'Johnathan Mind', 0, 100, false);
// let book3 = new Book(`The Art of Saying No`, 'Psycology', 'Al Gore', 48, 100, true);
// let book4 = new Book(`The Courage to Be Disliked`, 'Self-Help', 'Benjamin Franklin', 98, 258, false);
// let nativeSon = new Book(`Native Son`, 'Realness', 'Richard Wright', 0, 100, false)
