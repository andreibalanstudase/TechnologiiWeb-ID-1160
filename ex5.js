const numbers=[1,2,3,4,5];

const calculateMean = (arr) =>{
    const sum = arr.reduce((acc,el)=>acc+el,0);
    const arryLength = arr.length
    return sum/arryLength;
;}
console.log(calculateMean(numbers));