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

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount,);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, type, releaseDate, pagesCount) {
        super(type, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, type, releaseDate, pagesCount) {
        super(author, type, releaseDate, pagesCount);
        this.type = "detective";
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
        // return typeof this.books.find(book => book[type] === value) === 'object' ? this.books.find(book => book[type] === value) : null
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }

    giveBookByName(bookName){
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark < 2 || mark > 5) return;
        if (this.marks.hasOwnProperty(subjectName) !== true) {
            this.marks[subjectName] = [];
            console.log("Несуществующий предмет. Предмет создан.");
        }
        this.marks[subjectName].push(mark);
    }

    getAverageBySubject(subjectName) {
        if(this.marks.hasOwnProperty(subjectName) === false || this.marks.length === 0) { 
            return 0;
        }
        return this.marks[subjectName].reduce((average, mark ) => average + mark) / this.marks[subjectName].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks)
        
        if (subjects.length === 0) {
            return 0
        }
    
        const sum = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0)
        const average = sum / subjects.length

        return average
    }

    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
}