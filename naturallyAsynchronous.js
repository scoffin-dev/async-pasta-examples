let waterStatus = 'not boiling';
let rotiniStatus = 'uncooked';
let sauceStatus = 'not made';
let pastaDishStatus = 'incomplete';

// STEP 1: Boil water.
function boilWater() {
    console.log(`Starting boilWater function`);
    // * Call imaginary addWaterToPot and turnStoveOn functions
    waterStatus = 'boiling';
    console.log(`The water is '${waterStatus}'.`);
    return waterStatus;
}

// STEP 2: Add rotini to water and cook for 11 minutes.
function cookRotini() {
    console.log(`Starting cookRotini function`);
    try {
        if(waterStatus == 'boiling') {
            // * Call imaginary addRotiniToWater function
            setTimeout(function () {
                rotiniStatus = 'cooked';
                alert(`Beep! Beep! Beep! This is your oven timer telling you the rotini is done cooking.`)
                console.log(`The timer just went off. If you'd waited, your rotini would be '${rotiniStatus}' right now...`)
            }, 5000); // Set cook time (abbreviating 11 minutes to 5 seconds)
            console.log(`Is the rotini ready? The rotini is '${rotiniStatus}'.`);
            return rotiniStatus;
        }
    } catch(err) {
        console.log(`Error in cookRotini function: ${error.message}`);
        return(err);
    }
}

// STEP 3: In a large bowl, combine lemon, oil, and spices together to make the sauce.
function makeSauce() {
    console.log(`Starting makeSauce function`);
    try {
        // * Call imaginary mixSauceIngredients function
        sauceStatus = 'made';
        console.log(`The sauce is '${sauceStatus}'.`);
        return sauceStatus;
    } catch(err) {
        console.log(`Error in makeSauce function: ${error.message}`);
        return(err);
    }
}

// STEP 4: Strain the rotini and add it to the bowl of sauce.
function completePastaDish() {
    console.log(`Starting completePastaDish function`);
    try {
        if(rotiniStatus == 'cooked' && sauceStatus == 'made') {
            // * Call imaginary strainRotini and tossRotiniWithSauce functions
            pastaDishStatus = 'complete';
            alert(`Congratulations! Your pasta dish is '${pastaDishStatus}'!`);
            return;
        } else if(rotiniStatus == 'uncooked' && sauceStatus == 'made') {
            let error = new Error(`Oops! You added undercooked rotini to the sauce and ruined the dish!`);
            console.log(error);
            return error;
        } else if(rotiniStatus == 'cooked' && sauceStatus == 'not made') {
            let error = new Error(`You can't complete the pasta dish without the sauce!`);
            console.log(error);
            return error;
        } else {
            let error = new Error
            console.log(`You don't have the ingredients needed to complete the pasta dish!`);
            return pastaDishStatus;
        }
    } catch(err) {
        console.log(`Error in completePastaDish function: ${err.message}`);
        return(err);
    }
}

boilWater();
cookRotini();
makeSauce();
completePastaDish();