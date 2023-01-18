module.exports = function reverse (n) {
  let string = n.toString();
  let revString = '';
  let i = (string.length - 1);
  while (i >= 0) {
    revString = `${revString}${string[i]}`;
    i = i - 1;
  }
  return(+revString.replace(/[\D]+/g, ''))
}
