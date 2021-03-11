
/*We can solve this problem the way people learn to open brackets: from innermost bracket to the outer brackets.
This code uses the same approach, looking for brackets that have no other bracket inside them, Like: (), {}, [], || and so one...
Iterates throught code till there are no brackets to open */

module.exports = function check(str, bracketsConfig) {

  // check whether there are any valid brackets that came in order, like: () ,{}, []....
  function hasValidBrackets(str, bracketsConfig){

    //stores the diff between first and the next occurances of the brackets
    let diff = []
    bracketsConfig.forEach( e => {
      for (i = 0, len = str.length; i < len; i++){
        if(str[i] == e[0]){
          let startIndex = i
          let endIndex = str.indexOf(e[1], i+1)
          diff.push(endIndex - startIndex ) 
        }
  
      }
    })
    
    //if start and end indeces come in order, it means there are brackets to open
    let check = diff.indexOf(1)
    if (check != -1){
      return true
    }
    else{
      return false
    }
  }

  //while we can open a bracket by taking it away, we continue opening
  while (hasValidBrackets(str, bracketsConfig)){
    bracketsConfig.forEach( e => {
      let re = `${e[0]+e[1]}`
      // console.log("TYPEE", typeof str)
      str = str.split(re).join('')
      console.log ("END RESULT",  str)
    })
    //if we are here, we have no other brackets to open
    if (str.length == 0){
      console.log(true)
      return true
    }
  }
  //if we are here, the input is invalid
  return false
}

