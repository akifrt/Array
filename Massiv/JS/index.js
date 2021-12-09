
//Filter
let numbers = [3,5,0,8,222,11]


 function MyFilter(array){
  let result = []
  for(let element of array){
    if(element >= 5){
      result.unshift(element)
    }
  }
  return result.sort()
} 
console.log(MyFilter(numbers)) 


//Some
/* 
function MySome(array){
  if(array.length === 0){
    return false
  }else{
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > 5) return true
      else return false
    }
  }
}
console.log(MySome(numbers))

// Find

function MyFind(array, element){
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] === element) return array[i]
  }
}

console.log(MyFind(numbers, 8)) */

//Every
/* const numbers = [6, 4]
function MyEvery(array){
  if(Array.isArray(array)) return 'array'
  else return 'string'
}
console.log(MyEvery(numbers)) */