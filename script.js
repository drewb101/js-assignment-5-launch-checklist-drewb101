// Write your JavaScript code here!

const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    // let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    console.log("inside load event");
   
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //console.log("inside submit event");

        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        
        formSubmission(document, null, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        //alert the user if the conditions are invalid for each input

        //if the conditions a valid for all inputs call form submission

        //form submission will update launch status
    });
    
});

