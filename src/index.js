module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
  }
  let pairs = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    pairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    if (Object.keys(pairs).includes(currentBracket) && Object.values(pairs).includes(currentBracket)) {
      if (currentBracket !== stack[stack.length - 1]) {
        stack.push(currentBracket);
      }else {
        stack.pop();
      }
    }else {
      if (openBrackets.includes(currentBracket)) {
        stack.push(currentBracket);
      } else {
        if (pairs[currentBracket] !== stack.pop()) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}