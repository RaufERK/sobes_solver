function isValid(str) {
  // your code here
  let result = true;
  const allBreckets = new Set(['{', '}', '(', ')', '[', ']']);
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const stack = [];
  str.split('').forEach((el) => {
    const last = stack[stack.length - 1];
    if (allBreckets.has(el)) {
      if (map[el]) {
        stack.push(el);
      } else if (map[last] === el) {
        stack.pop();
      } else {
        result = false;
      }
    }
  });
  console.log('FINAAL =>', !stack.length);
}

isValid('(foo)'); // true
isValid('(f[o]{o})'); // true
isValid('[(){}()()]'); // true
isValid('(foo'); // false — нет закрывающей
isValid('{f[o}o]'); // false — скобки пересекаются
