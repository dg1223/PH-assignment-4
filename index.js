const { NULL } = require("node-sass")


// First problem: mindGame
function mindGame(number) {
    /**
     * The mindGame function takes a number as an argument and returns the 
     * result of ((number*3 + 10)/2)-5.
     * 
     *
     * @param number Pass a positive number to the function
     *
     * @return A number
     *
     */
    
    if ((typeof number) !== 'number') {
        return "TypeError: Your input should only be a number."
    } else if (number < 0) {
        return 'ValueError: Your input should not be a negative number.'
    } else {
        /* pass */
    }

    return ((number*3 + 10)/2)-5
}

// Second problem: evenOdd
function evenOdd(string) {
    /**
     * The evenOdd function takes a string as input and returns 'even' 
     * if the length of the string is even, or 'odd' if it's odd.
     * 
     *
     * @param string Determine if the number of characters in the string 
     *               is even or odd
     * 
     * @return A string
     *
     */

    if ((typeof string) !== 'string') {
        return "TypeError: Your input should only be a string."
    }

    let str_length = string.length
    return (((str_length % 2) === 0) ? 'even' : 'odd')
}

// Third problem: isLGSeven
function isLGSeven(number) {
    /**
     * The isLGSeven function returns the result of subtracting 7 from a number,
     * or multiplying the number by 2 if it is greater than seven.
     * 
     *
     * @param number Pass in the number that is being tested
     *
     * @return The difference between the number and 7 if it is less than 7;
     *         otherwise double the number
     *
     */

    if ((typeof number) !== 'number') {
        return "TypeError: Your input should only be a number."
    }

    let difference = number - 7
    return ((difference < 7) ? difference : number*2)
}

// Fourth problem: findingBadData
function findingBadData(array) {
    /**
     * The findingBadData function counts the number of negative values 
     * in an array.
     * 
     *
     * @param array An array containing only numbers
     *
     * @return The number of negative values in the input array
     *
     */

    // check if input is an array
    if (!Array.isArray(array)) {
        return "TypeError: Your input should only be an array."
    }

    // check if any array item is not a number
    const num_type = (item) => typeof item !== 'number'
    if (array.some(num_type)){
        return "TypeError: Your array should contain numbers only."
    }

    // count negative values
    let bad_data = 0
    for(let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            bad_data += 1
        }
    }

    return bad_data
}

// Fifth problem: gemsToDiamond
function gemsToDiamond(params) {
    return NULL
}

a = findingBadData([-4, -9, -5, -33, -55])
console.log(a)
