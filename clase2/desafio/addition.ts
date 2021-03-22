export class Addition {

    private n1: number;
    private n2: number;

    constructor(number1: number, number2: number) {
        this.n1 = number1;
        this.n2 = number2;
    };

    public result = () => this.n1 + this.n2;
};