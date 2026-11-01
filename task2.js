function digitSum(k) {
    k = Math.abs(k);
    if (k < 10) {
        return k;
    }
    return (k % 10) + digitSum(Math.floor(k / 10));
}
console.log(digitSum(1234)); 
console.log(digitSum(5));    
console.log(digitSum(908));  
