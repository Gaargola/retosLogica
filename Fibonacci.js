let n0 = 0;
let n1 = 1;

for (let i = 1; i <= 50; i++){
  console.log(n0);
  let res = n0 + n1;
  n0 = n1;
  n1 = res;
}