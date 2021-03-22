let splittedText = async (text, cb, frecuency = 1) => {
    let words = text.split(' ');
    let index = 0;
    let loop;
    return new Promise((resolve, reject) => {
        loop = setInterval(() => {
            if (index >= words.length) {
                clearInterval(loop)
                let resp = cb(words)
                resolve(resp);
            } else {
                console.log(words[index]);
                index++
            };
        }, frecuency * 1000)
    });
};
let endProcess = words => `----- Process completed. Total words: ${words.length} -----`

let calls = async () => {
    console.log(`----- Initializing short text -----`);
    console.log(await splittedText(`Hey! Short text here. Only 9 words on it`, endProcess, 1));
    console.log(`----- Initializing medium text -----`);
    console.log(await splittedText(`Hey! Medium text here. A total of 11 words on it!`, endProcess, 0.8));
    console.log(`----- Initializing large text -----`);
    console.log(await splittedText(`Hey! This is a very large text here. It has a total of 24 words on it! By the way, my name is Nicolás!`, endProcess, 0.5));
};

calls();