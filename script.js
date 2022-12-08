// Write your JavaScript code here!

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let listedPlanets;
    let currentPlanet;
    //Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        console.log(typeof(listedPlanets));
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        currentPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, currentPlanet.name, currentPlanet.diameter, currentPlanet.star, currentPlanet.distance, currentPlanet.moons, currentPlanet.image);
    })
    
    

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });
    
});

