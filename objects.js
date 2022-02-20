function countWords(string) {
    return string.trim().split('\n').join('').split(' ').filter(item => item !== '').length;
}

function countVowels(string) {
    let counter = 0;
    string.toLowerCase().split('').forEach(item => {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            counter++;
        }
    });
    return counter;
}

function propertyObject(object) {
    return Object.keys(object).join(' ');
}

function removeProperty(object) {
    console.log(object);
    delete object.rollno;
    console.log(object);
}

function lengthOfObject(object) {
    return Object.keys(object).length;
}

function displayReadingStatus(array) {
    const result = [];
    array.forEach(item => {
        if (item.readingStatus === true) {
            result.push(`Already read "${item.title}" by ${item.author}`);
        } else {
            result.push(`You still need to read "${item.title}" by ${item.author}`);
        }
    });
    return result.join('\n');
}

function Rectangle(late1, late2) {
    this.late1 = late1;
    this.late2 = late2;
    this.perimeter = () => (this.late1 + this.late2) * 2;
    this.area = () => this.late1 * this.late2;
}

function sortObjectArray(array, property) {
    array.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
    return array;
}

function printMethods(object) {
    const methodArray = [];
    for (let property in object) {
        if (typeof (object[property]) === 'function') {
            methodArray.push(property);
        }
    }
    return methodArray;
}

function keyValue(object) {
    return Object.entries(object);
}

function switchKeyValue(object) {
    const switchedObject = {};
    for (let key in object) {
        switchedObject[object[key]] = key;
    }
    return switchedObject;
}

function isInObject(object, property) {
    for (let key in object) {
        if (key === property) {
            return true;
        }
    }
    return false;
}

console.log(countWords(` The quick brown fox jumps over  the 
lazy dog.`));
console.log(countVowels('United States'));
console.log(propertyObject({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}));
removeProperty({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
});
console.log(lengthOfObject({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}));
console.log(displayReadingStatus([{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
]));
const rectangle = new Rectangle(5, 2);
console.log(`Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);
console.log(sortObjectArray([{
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
], 'title'));
console.log(printMethods({
    title: 'Ciao',
    number: 5,
    ciao: () => console.log('ciao')
}));
console.log(keyValue({
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}));
console.log(switchKeyValue({
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
}));
console.log(isInObject({
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
}, 'green'));
console.log(isInObject({
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
}, 'ciao'));