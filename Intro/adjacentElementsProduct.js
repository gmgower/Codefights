//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

var inputArray = [3, 6, -2, -5, 7, 3];

function adjacentElementsProduct(inputArray) {
    //Initialize product holder to first values and not 0 if you use 0 it will not work if all reulsts are negative
    var product = inputArray[0] * inputArray[1];
    //Compares the current product with adjacent multiplying elements and sets it if it is greater
        for(var i = 0; i < inputArray.length; i++){
            if(inputArray[i] * inputArray[i+1] >= product){
                product = inputArray[i] * inputArray[i+1];
            }
        }
        return product;
    }

    adjacentElementsProduct(inputArray);