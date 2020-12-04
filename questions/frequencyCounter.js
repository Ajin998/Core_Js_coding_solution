/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
  if (Number.isInteger(str) == true) throw new Error("Invalid Input");
  else {
    const value = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    };
    const arr =str.split('');
    arr.forEach(l=>{
       if(l.toLowerCase()=='a') value.a=1;
       if (l.toLowerCase() == "e") value.e = 1;
       if (l.toLowerCase() == "i") value.i = 1;
       if (l.toLowerCase() == "o") value.o = 1;
       if (l.toLowerCase() == "u") value.u = 1;
    });
    return value;

  }
};
module.exports = frequencyCounter;
