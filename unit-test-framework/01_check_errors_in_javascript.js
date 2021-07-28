const NumberToWord = require('../SUT/utils/numberToWord')
//const numbertoword = new NumberToWord()

// console.log(numbertoword.convert(5000))
// console.log(numbertoword.convert(500000))
// console.log(numbertoword.convert(21000000))

// Reto ágil: Probar la funcionalidad de la librería
// desde la forma manual a la automática.

// const number = 5000
// const word = 'cinco mil'
// console.log(numbertoword.convert(number)===word)

function expect(testValue){
  const comparators = { 
    toEqual(expectedValue){
      if (testValue === expectedValue) {
        console.log(`La prueba para : ${testValue} salio exitosa`)
      }
      else{
        throw new Error(`Prueba Fallida: ${testValue}  !!  ${expectedValue}`)
      }
    },
    toHaveLength(expectedValue){
      if (testValue.length === expectedValue) {
        console.log(`La prueba para : ${testValue} salio exitosa`)
      }
      else{
        throw new Error(`Prueba Fallida: ${testValue}  !!  ${expectedValue}`)
      }
    }
  }
  return comparators
}

expect(numbertoword.convert(123)).toEqual('ciento veintitrés')
expect([1,2,3]).toHaveLength(3)






//Principio AAA
//Arrange = (preparar algo para algo que viene)
//Act =ejecutar
//Assert  = preguntar si una aseveracion es correcta o no

//given = dado que
//when = cuando se haga esto
//then = luego  que sucedio , que pasó
function test(){
  const numbertoword = new NumberToWord() // 51 a 61 Arrange(podria ser opcional)

  const test = [
    { value:5000, expected: 'cinco mil' },
    { value:21000, expected: 'veintiún mil' },
    { value:5000000, expected: 'cinco millones' }
  ]
  test.forEach((test) => {
    const {value, expected} = test

    // Act 
    const converted_value = numbertoword.convert(value) 
    
    try {
      // Assert
      expect(converted_value).toEqual(expected) 
    } catch (error) {
      console.error(error.message)
    }
  });
}

test()