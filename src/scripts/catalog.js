export const Catalog = (foodArr) =>{
    let htmlString = ``
    for (const food of foodArr) {
        htmlString += `<section class="plant">${food.type}</section>`
    }
    htmlString += ``
    return htmlString
}