const regxMatchCheck = (regx, str)=>{
    let result = str.test(regx);
    return result

}



let ans =  regxMatchCheck('aaTESTaabbccddeeff', /test/i);
console.log(ans); 