import BookList from './bookList.js';
import Book from './book.js';
import Library from './Library.js';
import CardHolder from './cardholder.js';
import Booklist from './bookList.js';


// New Lirbray Init
let Mainbranch = new Library('Main Branch')


// New Booklist Init
let summerReadingList = new BookList("Summer Reading List")
let winterReadingList = new BookList("Winter Reading List")
let StaffPicks = new Booklist("Staff Picks")
let intakeBookList = new Booklist("All Books")

// New Book Init
let artOfWar = new Book(`Art of War`, 'Self-Help', 'SunTzu', 48, 100, true, 1);
let darkPsychology = new Book(`Dark Psychology`, 'Politics & Science', 'Johnathan Mind', 0, 100, true, 2);
let theArtofSayingNo = new Book(`The Art of Saying No`, 'Psycology', 'Al Gore', 48, 100, true, 3);
let theCourageToBeDisliked = new Book(`The Courage to Be Disliked`, 'Self-Help', 'Benjamin Franklin', 98, 258, true, 4);
let nativeSon = new Book(`Native Son`, 'Realness', 'Richard Wright', 0, 100, true, 5);
let LoveisTrash = new Book(`Love is Trash`, 'Self-Help', 'Golden Child', 48, 100, true, 6);
let goldenChild = new Book(`Dark Psychology`, 'Politics & Science', 'Johnathan Mind', 0, 100, true, 7);
let homieDontPlayThat = new Book(`Homie Dont Play That`, 'Psycology', 'Carl Marx', 48, 100, true, 8);
let funInTheSun = new Book(`Fun In The Sun`, 'Self-Help', 'OJ the Juice Man', 98, 258, true, 9);
let dylanSpitsHotFire = new Book(`Dylan Spits Hot Fire`, 'Realness', 'Dylan x5', 0, 100, true, 10)

//New Card Holder Init
let Malcomlm = new CardHolder("Malcomlm", "Mainbranch", 1,)
let Thomas = new CardHolder("Thomas", "Mainbranch", 2,)
let Johnathan = new CardHolder("Johnathan", "Mainbranch", 3,)
let Chris = new CardHolder("Chris", "Mainbranch", 4,)
let Raven = new CardHolder("Raven", "Mainbranch", 5,)
let Kambria = new CardHolder("Kambria", "Mainbranch", 6,)
let Corrine = new CardHolder("Corrien", "Mainbranch", 7,)

//These functions Add books to Booklists

winterReadingList.add(nativeSon);
summerReadingList.add(artOfWar);
StaffPicks.add(darkPsychology);
winterReadingList.add(theArtofSayingNo);
summerReadingList.add(theCourageToBeDisliked);
StaffPicks.add(LoveisTrash);
winterReadingList.add(homieDontPlayThat);
summerReadingList.add(funInTheSun);
StaffPicks.add(goldenChild);
winterReadingList.add(dylanSpitsHotFire);
intakeBookList.add(artOfWar)
intakeBookList.add(nativeSon)
intakeBookList.add(darkPsychology)
intakeBookList.add(theArtofSayingNo)
intakeBookList.add(theCourageToBeDisliked)
intakeBookList.add(LoveisTrash)
intakeBookList.add(homieDontPlayThat)
intakeBookList.add(funInTheSun)
intakeBookList.add(goldenChild)
intakeBookList.add(dylanSpitsHotFire)

//These fucntions add booklists to library

Mainbranch.intakeBookList(intakeBookList)
Mainbranch.intakeBookList(summerReadingList)
Mainbranch.intakeBookList(winterReadingList)
Mainbranch.intakeBookList(StaffPicks)


//These Functions Add CardHolders to Library

Mainbranch.registerNewCardholder(Malcomlm)
Mainbranch.registerNewCardholder(Thomas)
Mainbranch.registerNewCardholder(Johnathan)
Mainbranch.registerNewCardholder(Chris)
Mainbranch.registerNewCardholder(Raven)
Mainbranch.registerNewCardholder(Kambria)
Mainbranch.registerNewCardholder(Corrine)



//Testing
// console.log(winterReadingList.currentBooks);
// // console.log(summerReadingList.currentBooks);
// console.log(intakeBookList)
// console.log(Mainbranch)
// console.log(Mainbranch.cardHolders)


// console.log(Mainbranch.issueBookToCardholder(Raven(artOfWar, Mainbranch)))

// console.log(Raven)
console.log(Raven.checkout(artOfWar, Mainbranch))
// console.log(Raven)
// console.log(intakeBookList)


