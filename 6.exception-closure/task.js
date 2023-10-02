function parseCount(arg) {
    // return Number.isNaN(Number.parseFloat(argument)) ?  throw new Error("Невалидное значение") : Number.parseFloat(argument);
    // return Number.isNaN(Number.parseFloat(argument)) ? new Error("Невалидное значение") : Number.parseFloat(argument);
    if(Number.isNaN(Number.parseFloat(arg))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(arg);
}

function validateCount(arg) {
    try{
        return parseCount(arg);
    } catch(e){
        return e;
    }
}


class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        let p = 0.5 * (this.a + this.b + this.c); // perimeter();
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}
function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    }
    catch(e){
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
