const operation = async (n1: number, n2: number, str: string) => {
    switch (str) {
        case 'suma':
            let additionClass = await import('./addition');
            let addition = new additionClass.Addition(n1, n2);

            return new Promise((res, rej) => {
                res(addition.result());
            });
            break;
        case 'resta':
            let substractionClass = await import('./substraction');
            let substraction = new substractionClass.Substraction(n1, n2);

            return new Promise((res, rej) => {
                res(substraction.result());
            });
            break;
        case 'multiplicación':
            let multiplicationClass = await import('./multiplication');
            let multiplication = new multiplicationClass.Multiplication(n1, n2);

            return new Promise((res, rej) => {
                res(multiplication.result());
            });
            break;
        case 'división':
            let divitionClass = await import('./divition');
            let divition = new divitionClass.Divition(n1, n2);

            return new Promise((res, rej) => {
                res(divition.result());
            });
            break;
    };
};

let operations = () => {
    operation(10, 15, 'suma').then((result) => console.log(`Addition Result: ${result}`));
    operation(10, 15, 'resta').then((result) => console.log(`Substractio Result: ${result}`));
    operation(10, 15, 'multiplicación').then((result) => console.log(`Multiplication Result: ${result}`));
    operation(10, 15, 'división').then((result) => console.log(`Divition Result: ${result}`));
};
operations();