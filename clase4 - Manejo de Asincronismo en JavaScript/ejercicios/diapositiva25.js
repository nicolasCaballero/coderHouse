function* numberMajer(min, max) {
    let index = 0;
    while (true) {
        const number = Math.floor(Math.random() * (max - min) + min);
        const created = new Date();
        const createdAt = `${created.getDate()}/${created.getMonth() + 1}/${created.getFullYear()} ${created.getHours()}:${created.getMinutes()}:${created.getSeconds()}`
        index++
        yield {
            orden: index,
            numero: number,
            fyh: createdAt
        };
    };
};

const showJSON = obj => JSON.stringify(obj, null, 2);

const gen = numberMajer(5, 50);

console.log(showJSON(gen.next().value));
console.log(showJSON(gen.next().value));
console.log(showJSON(gen.next().value));
console.log(showJSON(gen.next().value));