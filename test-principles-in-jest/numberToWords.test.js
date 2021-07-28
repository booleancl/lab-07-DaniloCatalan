const NumberToWord = require('../SUT/utils/numberToWord')

describe('numberToWord', () => {
  const numbertoword = new NumberToWord()

  it('number less than 100',()=>{
    expect(numbertoword.convert(19)).toEqual('diecinueve')
  })
  it('number less than 1000',()=>{
    expect(numbertoword.convert(200)).toEqual('doscientos')
  })
  it('number less than 10000',()=>{
    expect(numbertoword.convert(9000)).toEqual('nueve mil') 
  })
  it('number less than 10000',()=>{
    expect(numbertoword.convert(75100)).toEqual('setenta y cinco mil cien') 
  })
  it('number less than 100000',()=>{
    expect(numbertoword.convert(80000)).toEqual('ochenta mil') 
  })
  it('number less than 1000000',()=>{
    expect(numbertoword.convert(325200)).toEqual('trescientos veinticinco mil doscientos')
  })
  it('invalid values',()=>{
    expect(() =>{
      numbertoword.convert(NaN)
    }).toThrow()
  })
  it('invalid values',()=>{
    expect(() =>{
      numbertoword.convert('1.3')
    }).toThrow()
  })

})

