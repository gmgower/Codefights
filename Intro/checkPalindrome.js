//Given the string, check if it is a palindrome. A palindrome is a string that reads the same left-to-right and right-to-left.
//Solution 1
function checkPalindrome(inputString){
    // Lowercase the string.
   var str = inputString.toLowerCase();
   // Create the FOR loop
    for(var i = 0; i <= str.length/2; i++){
   // As long as the characters from each part matech the FOR loop will continue
        if(str[i] !== str[(str.length - 1) - i]){
   //When the characters don't match, false is returned and exit the FOR loop
            return false;
        }
    }
    //Bothh parts are strictly equal it return true => the string is paliindrome.
    return true;
}

checkPalindrome("aabaa");
checkPalindrome("abac");
checkPalindrome("a");