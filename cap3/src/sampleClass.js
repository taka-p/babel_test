class Sample {
    constructor(num = 1) {
        this.number = num;
    }
    getNumber() {
        console.log(`Number is ${this.number}`);
    }
    setNumber(num) {
        this.number = num;
    }
}

module.exports = Sample;
