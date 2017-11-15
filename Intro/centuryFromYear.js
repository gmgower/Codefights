//Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    //Breaks down into century floating point
    var valueCheck = year/100;
    //if perfect century return the value
    if(year % 100 === 0){
        return valueCheck;
    }
    //If imperfect century example: 1705 remove floating points and add 1 for logic
    return Math.floor(valueCheck) + 1;    
}
