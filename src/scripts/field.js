let currentGrowingPlants = []

export const addPlant = (seedObj) =>{ 
    if (Array.isArray(seedObj)){
        for (let i =0; i< seedObj.length; i++){
            currentGrowingPlants.push(seedObj[i])
        }
        
    }else{
        currentGrowingPlants.push(seedObj)
    }
    
}

export const usePlants = ()=> {return currentGrowingPlants}