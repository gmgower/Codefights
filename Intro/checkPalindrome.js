//Given the string, check if it is a palindrome. A palindrome is a string that reads the same left-to-right and right-to-left.
function checkPalindrome(inputString){
    for(var i = 0; i <= inputString.length/2; i++){
        if(inputString[i] != inputString[(inputString.length - 1) - i]){
            return false;
        }
    }
    return true;
}

checkPalindrome("aabaa");
checkPalindrome("abac");
checkPalindrome("a");