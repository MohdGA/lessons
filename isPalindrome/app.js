function isPalindrome(str){
    const removeSpace = str.toLowerCase().replace(/\s+/g,''); // to remove spaces in words    
    // const reversed = str.split('').reverse().join('');
    const reversed = removeSpace.split('').reverse().join('')
    return removeSpace === reversed
};

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));