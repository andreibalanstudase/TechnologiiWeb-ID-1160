string1 = 'rosu';
string2 = 'rasu';
string3 = 'alb';
string4 = 'alba';

function differenceStrings (stringA, stringB){
    var count = 0;
    if(stringA.length === stringB.length){
        for (var i = 0 ; i< stringA.length; i++){
            if (stringA[i] !== stringB[i]){
                count ++;
            }
        }
        return count;
    }else{
        return -1
    }
}

console.log(string1.length);
console.log(string1[1]);
console.log(differenceStrings(string1, string2));
console.log(differenceStrings(string3, string4)); 