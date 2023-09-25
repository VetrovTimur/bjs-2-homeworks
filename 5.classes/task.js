class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        number < 0 ? this._state = 0 : number > 100 ? this._state = 100 : this._state = number
    }

    get state() {
        return this._state;
    }
}

//Почему Magazine, а не Shop??? :) хехе...
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount,);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, ) {
        super(name, releaseDate, pagesCount,);
        this.type = 'book';
        this.author = author;
    }
}

// Не стал отделять их друг от друга строкой, так как посчитал, что 3 класса "копии" друг друга и у них одинаковый функционал, который завязан на родители.
// Можно так делать или это считается дурным тоном?
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount ) {
        super(name, releaseDate, pagesCount,);
        this.type = 'novel';
        this.author = author;
    }
}
class FantasticBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount,);
        this.type = 'fantastic';
        this.author = author;
    }
}
class DetectiveBook  extends Book {
    constructor(author, name, releaseDate, pagesCount ) {
        super(name, releaseDate, pagesCount,);
        this.type = 'detective';
        this.author = author;
    }
}

////////////////////////////////////////

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book){
        return book.state > 30 ? this.books.push(book) : this.books.push()
    }

    findBookBy(type, value) {
        return typeof this.books.find(book => book[type] === value) === 'object' ? this.books.find(book => book[type] === value) : null
    }

    giveBookByName(bookName){
        let giveBoook = this.books.find(book => book.name === bookName);
        if (typeof giveBoook === 'object') {
            let index = this.books.indexOf(giveBoook);
            this.books.splice(index, 1);
            return giveBoook;
        }
        else {
            return null;
        }
    }
}

////////////////////////////////////////
class Student {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    addMark() {
        
    }
}