const { NULL } = require("node-sass")


// First problem: mindGame
function mindGame(number) {
    /**
     * The mindGame function takes a number as an argument and returns the result of
     * ((number*3 + 10)/2)-5.
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
function evenOdd(params) {
    return 
}

a = mindGame(33)
console.log(a)

// Third problem: isLGSeven
function isLGSeven(params) {
    return NULL
}

// Fourth problem: findingBadData
function findingBadData(params) {
    return NULL
}

// Fifth problem: gemsToDiamond
function gemsToDiamond(params) {
    return NULL
}
