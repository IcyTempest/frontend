function validate(value) {
  if (value == null || value == undefined) {
    return 'inCorrect null or undefined'
  }
  if (typeof value != 'string') {
    return 'incorrect accept string only'
  }
  if (value == '') {
    return 'inCorrect Empty space'
  }

  return 'correct'

  //   if (value != null || value != undefined) {
  //     if (typeof value == "string") {
  //       if (value != '') {
  //         return 'correct'
  //       } else {
  //         return 'inCorrect Empty space'
  //       }
  //     } else {
  //       return 'incorrect accept string only'
  //     }
  //   } else {
  //     return 'inCorrect null or undefined'
  //   }
}

// const data = { name: 'rithiya' }
const data = ''
console.log(validate(data))
