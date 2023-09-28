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
        // let giveBoook = this.books.find(book => book.name === bookName);
        // if (typeof giveBoook === 'object') {
        //     let index = this.books.indexOf(giveBoook);
        //     this.books.splice(index, 1);
        //     return giveBoook;
        // }
        // else {
        //     return null;
        // }
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    setSubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            return console.log('Предмет уже существует.');
        }
        else {
            this.journal[subjectName] = [];
        }
    }
    
    addMark(mark, subjectName) {
        if (this.journal.hasOwnProperty(subjectName) !== true) {
            this.journal[subjectName] = [];
            console.log('Несуществующий предмет. Предмет создан.');
        }
        if ((typeof mark === 'number') && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark);
        }
        else {
            return console.log('Ошибка, оценка должна быть числом от 1 до 5');
        }
    }

    getAverageBySubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            let sum = 0;
            let marks = this.journal[subjectName];
            marks.forEach((item) => sum += item);
            let averageBySubject = sum / marks.length;
            return averageBySubject;
        } else {
            return console.log('Несуществующий предмет.');
        }
    }

    getAverage() {
        let sum = 0;
        let marks = Object.values(this.journal);
        let resultMarks = [];
        marks.forEach((item) => resultMarks = [].concat(resultMarks, item));
        resultMarks.forEach((item) => sum += item);
        let average = sum / resultMarks.length;
        return average;
    }

    exclude(reason) {
        delete this.journal;
        this.excluded = reason;
    }
}