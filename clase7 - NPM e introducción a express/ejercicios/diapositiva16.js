const moment = require('moment');
moment.locale('es');

let today = moment();
let birthDay = moment().set({
    'year': 1993,
    'month': 6,
    'day': 23
});
console.log(`Today is ${today.format('L')}
I was born in ${birthDay.format('L')}
Since my birthday ${today.diff(birthDay, 'years')} years have passed
Since my birthday ${today.diff(birthDay, 'days')} days have passed`);