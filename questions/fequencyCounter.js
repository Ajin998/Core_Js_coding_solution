const frequencyCounter = (str) => {
  if (Number.isInteger(str) === true) throw new Error("Invalid Input");
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
       if(l.toLowerCase()=='a') value.a ++;   //Updated the mistake (1 => ++);
       if (l.toLowerCase() == "e") value.e ++;
       if (l.toLowerCase() == "i") value.i ++;
       if (l.toLowerCase() == "o") value.o ++;
       if (l.toLowerCase() == "u") value.u ++;
    });
    return value;

  }
};

frequencyCounter("Surfbooaard"); // Just to check for incrementing vowel count