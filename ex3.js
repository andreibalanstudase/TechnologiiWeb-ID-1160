string1 = 'rasberry';
litera = 'r'
function differenceStrings (string, letter){
    var count = 0;
    for( var element of string) {
        if (element === letter)
        {count++}
    };
    return count;
}
console.log(differenceStrings(string1,litera));