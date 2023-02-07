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

    const str_length = string.length
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

    const difference = number - 7
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
    const isNotNum = (item) => typeof item !== 'number'
    if (array.some(isNotNum)){
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
function gemsToDiamond(num1, num2, num3) {
    /**
     * The gemsToDiamond function takes three numbers as arguments and 
     * returns the total value of all gems.
     * 
     *
     * @param num1 power of gems (a number) for 1st player
     * @param num2 power of gems (a number) for 2nd player
     * @param num3 power of gems (a number) for 3rd player
     *   
     *
     * @return : total number of diamonds (a number)
     *
     */

    if (arguments.length !== 3) {            
        return 'ParamError: You should pass exactly 3 arguments to the function.'
    } else if (typeof num1 !== 'number' || 
               typeof num2 !== 'number' || 
               typeof num3 !== 'number') {
                
                return 'TypeError: You should only pass numbers as arguments.'
    } else {
        /* pass */
    }

    const gem1 = 21
    const gem2 = 32
    const gem3 = 43

    const diamond = num1*gem1 + num2*gem2 + num3*gem3

    return ( (diamond <= 1000*2) ? diamond : diamond-2000 )
}
