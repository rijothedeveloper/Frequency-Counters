// add whatever parameters you deem necessary
function constructNote(message, letters) {
  const messageObj = createObj(message);
  const letterObj = createObj(letters);
  for (let m of message) {
    if (!letterObj[m] || messageObj[m] > letterObj[m]) {
      return false;
    }
  }
  return true;
}

function createObj(str) {
  const strArr = str.split("");
  const obj = {};
  for (let el of strArr) {
    if (!obj[el]) {
      obj[el] = 1;
    } else {
      obj[el] = obj[el] + 1;
    }
  }
  return obj;
}

module.exports = constructNote;
