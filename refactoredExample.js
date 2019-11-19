let sauceStatus = "not made";

// STEP 1: Boil water.
async function boilWater() {
    console.log(`Starting boilWater function`);
    // * Call imaginary addWaterToPot and turnStoveOn functions
    let waterStatus = 'boiling';
    console.log(`The water is '${waterStatus}'.`);
    return waterStatus;
}

// STEP 2: Add rotini to water and cook for 11 minutes.
async function cookRotini() {
    console.log(`Starting cookRotini function`);
    try {
        let waterStatus = await boilWater();
        let rotiniStatus;
        if(waterStatus == 'boiling') {
            // * Call imaginary addRotiniToWater function
            return new Promise((resolve, reject) => { // We need to wrap the timeout in a promise so the completePastaDish function can properly await it
                try {
                    console.log(`The rotini is now boiling. The timer will beep when it's done.`)
                    setTimeout(async function () {
                        // Check to see if we already made the sauce- if not, make it during the timeout
                        if(sauceStatus != "made") {
                            console.log(`Hmmm... We have some time and it looks like the sauce isn't made yet. Let's make it now.`)
                            makeSauce();
                        }
                        rotiniStatus = 'cooked';
                        alert(`Beep! Beep! Beep! This is your oven timer telling you the rotini is done cooking.`);
                        console.log(`Beep! Beep! Beep! This is your oven timer telling you the rotini is done cooking.`);
                        resolve(rotiniStatus);
                    }, 5000); // Set cook time (abbreviating 11 minutes to 5 seconds)
                } catch(err) {
                    reject(err);
                }
            });
        } else {
           rotiniStatus = 'uncooked';
           console.log(`Is the rotini ready? The rotini is '${rotiniStatus}'.`);
           return rotiniStatus; 
        }
    } catch(error) {
        console.log(`Error in cookRotini function: ${error.message}`);
        return(error);
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
    } catch(error) {
        console.log(`Error in makeSauce function: ${error.message}`);
        return(error);
    }
}

// STEP 4: Strain the rotini and add it to the bowl of sauce.
async function completePastaDish() {
    console.log(`Starting completePastaDish function`);
    try {
        let rotiniStatus = await cookRotini();
        console.log(`rotiniStatus == ${rotiniStatus} and sauceStatus == ${sauceStatus}`)
        if(rotiniStatus == 'cooked' && sauceStatus == 'made') {
            // * Call imaginary strainRotini and tossRotiniWithSauce functions
            pastaDishStatus = 'complete';
            alert(`Congratulations! Your pasta dish is '${pastaDishStatus}'!`);
            console.log(`Congratulations! Your pasta dish is '${pastaDishStatus}'!`);
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
            let error = new Error(`You don't have the ingredients needed to complete the pasta dish!`);
            console.log(error);
            return error;
        }
    } catch(error) {
        console.log(`Error in completePastaDish function: ${error.message}`);
        return(error);
    }
}

completePastaDish();