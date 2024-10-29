function timeConversion(s) {
  const amOrPm = s.slice(-2);
  const hour = parseInt(s.slice(0, 2));
  let hourString;
  let hourNum;

  if (amOrPm === "PM" && hour === 12) {
    hourString = hour.toString();
  } else if (amOrPm === "PM" && hour !== 12) {
    hourNum = hour + 12;
    hourString = hourNum.toString();
  } else if (amOrPm === "AM" && hour === 12) {
    hourNum = hour - 12;
    hourString = "0" + hourNum.toString();
  } else if ((amOrPm === "AM" && hour === 10) || hour === 11) {
    hourString = hour.toString();
  } else {
    hourString = "0" + hour.toString();
  }

  return hourString + ":" + s.slice(3, s.length - 2);
}

console.log(timeConversion("12:00:22AM"));
