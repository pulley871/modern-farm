import {createPlan} from "./plan.js"
// import {createSunflower} from "./seeds/sunflower.js"
// import {createWheat} from "./seeds/wheat.js"
// import {createAsparagus} from "./seeds/asparagus.js"
// import {createCorn} from "./seeds/corn.js"
// import {createPotato} from "./seeds/potato.js"
// import {createSoybean} from "./seeds/soybean.js"
import {Catalog} from "./catalog.js"
import {harvestPlants} from "./harvester.js"
import {usePlants} from "./field.js"
import {plantSeeds} from "./tractor.js"
console.log("Welcome to the main module")
const yearlyPlan =  createPlan();
const usePlantsa = usePlants()
const totalPlants = harvestPlants(usePlantsa)
plantSeeds(yearlyPlan)
console.log(usePlantsa)
console.log(harvestPlants(usePlantsa))
const catalogItems = Catalog(harvestPlants(usePlantsa))
console.log(Catalog(harvestPlants(usePlantsa)))
const mainHtmlContainer = document.querySelector(".container")
const render = () =>{
    mainHtmlContainer.innerHTML = catalogItems
}
render()