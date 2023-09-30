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

    // setSubject(subjectName) {
    //     return this.marks.hasOwnProperty(subjectName) === true ? console.log('Предмет уже существует.') : this.marks[subjectName] = [];
    // }
    
    // addMark(mark, subjectName) {
    //     // if (typeof mark === 'number' && mark >= 1 && mark <= 5) {
    //     //     return this.marks[subjectName].push(mark);
    //     //}
    //     return typeof mark === 'number' && mark >= 1 && mark <= 5 ? this.marks[subjectName].push(mark) : this.marks[subjectName] = [];
    // }

    // addMark(mark, subjectName) {
    //     if (this.journal.hasOwnProperty(subjectName) !== true) {
    //         this.journal[subjectName] = [];
    //         console.log('Несуществующий предмет. Предмет создан.');
    //     }
    //     if ((typeof mark === 'number') && (mark >= 1) && (mark <= 5)) {
    //         this.journal[subjectName].push(mark);
    //     }
    //     else {
    //         return console.log('Ошибка, оценка должна быть числом от 1 до 5');
    //     }
    // }

    // addMark(mark, subjectName) {
    //     this.marks[subjectName].push(mark)

    // }







    getAverageBySubject(subjectName) {
        if(this.marks.hasOwnProperty(subjectName) === false || this.marks.length === 0) { 
            return 0;
        }
        return this.marks[subjectName].reduce((average, mark, index, array) => average + mark / array.length)
    }

    getAverage() {
        if (Object.values(this.marks).length === 0) {
            return 0;
        }

        return Object.values(this.marks).reduce((accumulator, currentValue) => accumulator + currentValue / Object.values(this.marks).length, 0)
    }

    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
}
const student = new Student("Олег Никифоров");

// console.log(student);
// student.addMark(5, "химия");
// student.addMark(4, "химия");
// student.addMark(3, "химия");
// console.log(student);
arr = 1;
const test = {
    name: []
}
test.name.push(arr)
console.log(test);




