export const harvestPlants = (plantsArr) =>{
    let seedsArr = []
    for (const plant of plantsArr) {
        if (plant.type === "Corn"){
            for(let i = 0; i < plant.output; i+=2){
                seedsArr.push(plant)
                
            }
        
        }else{
            for(let i = 0; i < plant.output; i++){
                seedsArr.push(plant)
            }
        }
    }
    return seedsArr
}