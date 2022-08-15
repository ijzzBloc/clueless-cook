import {
    fetchRecipe
} from './main'

getParameter = (recipeID) => {
    address = window.location.search
    parameterList = new URLSearchParams(address)
    return parameterList.get(recipeID)
}
let recipeID = (getParameter('recipeID'))
fetchRecipe(recipeID).then((result) => {
    console.log(result.data.recipe)
    let recipeDetail = result.data.recipe
    let recipeIMG = document.getElementById('recipe-image')
    let ingredients = document.getElementById('instructions')
    let nutrients = document.getElementById('nutrients-table')
    let labels = document.getElementById('l-box')
    recipeIMG.innerHTML = ""
    let recipesIMGHTML = ""
    recipesIMGHTML +=
        '<div class="recipe-image" id="recipe-image">\n' +
        '<img alt="" src=' + recipeDetail.image + '>\n' +
        '</div>'
    recipeIMG.innerHTML = recipesIMGHTML;







    ingredients.innerHTML = ""
    let ingredientsHTML = "";
    let ingredientsCount = recipeDetail.ingredients.length
    console.log(ingredientsCount)
    if (ingredientsCount >= 1) {
        for (let i = 0; i < ingredientsCount; i++) {
            let ingredientsObject = result.data.recipe.ingredients[i]
            console.log(ingredientsObject)
            ingredientsHTML +=
                    '<li>' + ingredientsObject.text + '</li>'
        }
        ingredients.innerHTML = ingredientsHTML
    }
})


