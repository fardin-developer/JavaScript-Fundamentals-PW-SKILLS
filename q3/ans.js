function findMatches(str) {
    const digitPattern = /\d/g;            
    const uppercasePattern = /[A-Z]/g;     
    const lowercasePattern = /[a-z]/g;     
    const specialCharPattern = /[\W_]/g;   

    const digits = str.match(digitPattern);
    const uppercaseLetters = str.match(uppercasePattern);
    const lowercaseLetters = str.match(lowercasePattern);
    const specialChars = str.match(specialCharPattern);

    return {
        digits: digits || [],
        uppercaseLetters: uppercaseLetters || [],
        lowercaseLetters: lowercaseLetters || [],
        specialChars: specialChars || []
    };
}

const testString = "Hello World! 1234 @#$%^&*()";
const matches = findMatches(testString);

console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialChars);
