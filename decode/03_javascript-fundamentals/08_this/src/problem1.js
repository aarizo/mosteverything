'use strict';
function whatsMyAgeAgain() {
    // returns this.age unless this is not defined. If this is not defined, return 18
    
    if (this) return this.age;
    else return 18;
   
}

module.exports = whatsMyAgeAgain;