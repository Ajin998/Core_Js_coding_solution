const rotateString = (str, n, direction) => {
  var direct = ["left", "right"];
  //For Error handling ka part
  if (str == undefined) throw new Error("Invalid Input");
  if (
    direct.includes(direction) == false &&
    direct.includes(direction) == false
  )
    throw new Error("Invalid Direction");
  else {
    //For making things easier we first convert the string into array
    let string_arr = str.split("");
    if (direction === "left") {
      //Shifting array from the front we use shift() that will pop the first element n times
      for (let i = 0; i < n; i++) {
        let firstItem = string_arr.shift();
        string_arr.push(firstItem);
      }
      return string_arr.join(""); //Since input is string so we have to give back in string also.
    }
    if (direction === "right") {
      for (let i = 0; i < n; i++) {
        let last_item = string_arr.pop();
        string_arr.splice(0, 0, last_item); // This will basically add element at 0th index
      }
      return string_arr.join("");
    }
  }
};
module.exports = rotateString;
