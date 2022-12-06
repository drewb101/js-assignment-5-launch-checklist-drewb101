// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    
    if (testInput === ""){
        return "Empty";
    }
    else if(!isNaN(testInput)){
        return "Is a number";
    }
    else if(isNaN(testInput)){
        return "Not a number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //run each inputs' value through validate input function and return if it's empty, number, or string

    let pilotResult = validateInput(pilot);
    let copilotResult = validateInput(copilot);
    let fuelResult = validateInput(fuelLevel);
    let cargoResult = validateInput(cargoLevel);

    if (pilotResult === "Empty" || copilotResult === "Empty" || fuelResult === "Empty" || cargoResult === "Empty") {
        alert("All fields are required!");
    }
    else if (pilotResult === "Is a number" || copilotResult === "Is a number") {
        alert("Pilot & Co-pilot cannot be number.");
    }
    else if (fuelResult === "Not a number" || cargoResult === "Not a number") {
        alert("Fuel level & cargo mass must be numbers.")
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
