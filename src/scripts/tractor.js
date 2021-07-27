
import {addPlant} from "./field.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createCorn} from "./seeds/corn.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createWheat} from "./seeds/wheat.js"


export const plantSeeds = (plan) =>{
    
    for (const column of plan) {
        for (const plant of column){
            switch (plant){
                case "Sunflower":
                    addPlant(createSunflower());
                    break;
                case "Corn":
                    addPlant(createCorn())
                    break;
                case "Asparagus":
                    addPlant(createAsparagus())
                    break;
                case "Potato":
                    addPlant(createPotato())
                    break;
                case "Soybean":
                    addPlant(createSoybean())
                    break;
                case "Wheat":
                    addPlant(createWheat())
                    break;
            }
        }
    }
}