let a = 4;

const foo = (x) => {
  let b = a * 4;

  const bar = (y) => {
    let c = y * b;
    return c;
  }
  
  return bar(b);
}



console.log(foo(a));
