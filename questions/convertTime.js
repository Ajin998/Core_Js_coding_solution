/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  if (typeof seconds != "number") throw new Error("Invalid Input");
  var second = seconds % 60;
  var minute = Math.floor((seconds / 60) % 60);
  var hour = Math.floor(seconds / 60 / 60);
  const time = {
    hours: hour,
    minutes: minute,
    seconds: second,
  };

  return time;
};

module.exports = convertTime;
