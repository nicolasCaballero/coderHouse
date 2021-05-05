const getNum0To255 = ():number => Math.floor(Math.random() * 256)

class GetColor {
    generateGetColor():string {
        return `rgb(${getNum0To255()},${getNum0To255()},${getNum0To255()})`
    }
}

const getColor:GetColor = new GetColor()
console.log(getColor.generateGetColor())