// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let destinationInfo = document.getElementById("missionTarget");
   destinationInfo.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
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
    let passValidation = true;

    if (pilotResult === "Empty" || copilotResult === "Empty" || fuelResult === "Empty" || cargoResult === "Empty") {
        alert("All fields are required!");
        return passValidation = false;
    }
    else if (pilotResult === "Is a number" || copilotResult === "Is a number") {
        alert("Pilot & Co-pilot cannot be a number.");
        return passValidation = false;
    }
    else if (fuelResult === "Not a number" || cargoResult === "Not a number") {
        alert("Fuel level & cargo mass must be a number.")
        return passValidation = false;
    }

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;
        
    if(fuelLevel < 10000 && passValidation === true) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }
    else if(cargoLevel > 10000 && passValidation === true) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        
    }
    else if(fuelLevel >= 10000 && cargoLevel <= 10000 && passValidation === true) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level high enough for launch.";
        cargoStatus.innerHTML = "Cargo mass low enough for launch.";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();    
    });

    return planetsReturned;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function pickPlanet(planets) {
    let currentPlanet;
    return currentPlanet = planets[getRandomInt(0,5)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
