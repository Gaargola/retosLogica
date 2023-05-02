function esPrimo(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      console.log(i);
    }
  }
  