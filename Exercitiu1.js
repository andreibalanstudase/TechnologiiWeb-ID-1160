var stirngArray = ['Alle', 'are', 'rate'];

function arrow (array){
    stringToReturn = ''
    array.forEach(element => {
        stringToReturn += " " + element;
    });
    return stringToReturn;
}

console.log(arrow(stirngArray));