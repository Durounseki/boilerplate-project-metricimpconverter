function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    const numString = input.replace(/[a-zA-Z]+$/,'');
    if(numString === ''){
      result = 1;
    }else{
      const filteredString = numString.match(/^(\d+(\.\d)?|\d*(\.\d)?)(\/(\d+(\.\d)?|\d*(\.\d)?))?$/);
      if(filteredString){
        const numArray = filteredString[0].split('/');
        if(numArray.length === 2){
          const numerator = numArray[0];
          const denominator = numArray[1];
          if(numerator === '' || denominator === ''){
            result = 'invalid number';
          }else{
            if(isNaN(+numerator) || isNaN(+denominator)){
              result = 'invalid number';
            }else{
              result = isNaN((+numerator) / (+denominator)) ? 'invalid number' : (+numerator) / (+denominator);
            }
          }
        }else{
          result = isNaN(+numArray[0]) ? 'invalid number' : +numArray[0];
        }
      }else{
        result = 'invalid number';
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    const unit = input.match(/[a-zA-Z]+$/)[0];
    const parsedUnit = unit.match(/^l$|^L$/) ? unit.toUpperCase() : unit.toLowerCase();
    const result = outUnits[parsedUnit];
    if(result){
      return parsedUnit;
    }else{
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    
    const result = outUnits[initUnit];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    const result = spellOutUnits[unit];
    if(result){
      return result;
    }else{
      return unit;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = Number((initNum * conversions[initUnit]).toFixed(5));
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  const outUnits = {
    'L': 'gal',
    'gal': 'L',
    'km': 'mi',
    'mi': 'km',
    'lbs': 'kg',
    'kg': 'lbs'
  }
  const spellOutUnits = {
    'L': 'liters',
    'gal': 'gallons',
    'km': 'kilometers',
    'mi': 'miles',
    'kg': 'kilograms',
    'lbs': 'pounds'
  }
  const conversions = {
    'L': 1/3.78541,
    'gal': 3.78541,
    'kg': 1/0.453592,
    'lbs': 0.453592,
    'km': 1/1.60934,
    'mi': 1.60934
  }
  
}

module.exports = ConvertHandler;
