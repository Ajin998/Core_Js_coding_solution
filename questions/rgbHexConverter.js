/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    if(rgbValues.length>3) throw new Error("Invalid Input");
    if(rgbValues[0]> 255 || rgbValues[1]>255 || rgbValues[2] > 255) throw new Error("Invalid Input");
    if(typeof rgbValues[0] !== 'number' || typeof rgbValues[1]!=='number' || typeof rgbValues[2]!=='number'){
        throw new Error("Invalid Input");
    }
   let first = "0"+rgbValues[0].toString(16);
   let second = "0" + rgbValues[1].toString(16);
   let third = "0" + rgbValues[2].toString(16);

   return '#'+first+second+third
};
module.exports = rgbToHexConversion;
