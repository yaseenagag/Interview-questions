function timeConversion(s) {
  let splitString = s.split(':')

  if (s.includes('AM') ){
    if (splitString[0] === '12'){
    let b = splitString.splice(0,1,'00')
    let j = splitString.join(':')
    let final = j.split('').slice(0, 8).join('')
    return final
    } 
  else {
      return s.split('').slice(0, 8).join('')
    }
  }

  if (s.includes('PM')){
    if (splitString[0] === '12'){
      let j = splitString.join(':')
      let final = j.split('').slice(0, 8).join('')
      return final
    } else {
      let newTime = parseInt(splitString[0]) + 12 
      let newString = splitString.splice(0,1)
      splitString.splice(0,0,newTime)
      let join = splitString.join(':')
      let split = join.split('').slice(0,8).join('')
      return split
    }
  }
}

timeConversion('12:45:22PM')