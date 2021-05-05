const getNum0To255 = () => Math.floor(Math.random() * 256);

class GetColor {
    generateColor() {
        return `rgb(${getNum0To255()},${getNum0To255()},${getNum0To255()})`
    };
};

const color = new GetColor();
console.log(color.generateColor());