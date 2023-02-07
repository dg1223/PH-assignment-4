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

    if ((typeof number) !== 'number') {
        return "TypeError: Your input should only be a number."
    }

    let difference = number - 7
    return ((difference < 7) ? difference : number*2)
}

a = isLGSeven(0)
console.log(a)

// Fourth problem: findingBadData
function findingBadData(params) {
    return NULL
}

// Fifth problem: gemsToDiamond
function gemsToDiamond(params) {
    return NULL
}
