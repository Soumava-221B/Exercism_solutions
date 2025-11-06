/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft) {
  if(timeLeft>0) {
    return 'Not done, please wait.'
  }
  else if(timeLeft === 0) {
    return 'Lasagna is done.'
  }
  else {
    return 'You forgot to set the timer.'
  }
}

export function preparationTime(layers, avr) {
  if(avr === undefined) {
    return layers.length*2;
  }
  else {
    return layers.length*avr
  }
}

export function quantities(layers) {
  let sTotal = 0;
  let nTotal = 0
  const Total = {}
  console.log(layers + " .layers")
  for(let i = 0; i<layers.length  ; i++){
    if(layers[i] === 'noodles'){
      nTotal += 50
    }
    else if(layers[i] === 'sauce'){
      sTotal += 0.2
    }
  }
  Total.noodles = nTotal
  Total.sauce = sTotal
  return Total
}
export function addSecretIngredient(friendsList, myList){
  let secretIngredient = friendsList[(friendsList.length - 1)]
  myList.push(secretIngredient)
}
export function scaleRecipe(recipe, portions){
  let scaledRecipe = {}
  let ratio = portions/2
  
  for(let i in recipe){
    if(recipe.hasOwnProperty(i)){
    scaledRecipe[i] = recipe[i]*ratio
    }
  }
  return scaledRecipe
}
