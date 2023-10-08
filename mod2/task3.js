function compareRandomNumbers(n, m) 
{

    let min = Math.min(n, m);
    let max = Math.max(n, m);
  
    let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  
    let comparison = {
      ' > ': num1 > num2,
      ' < ': num1 < num2,
      ' >= ': num1 >= num2,
      ' <= ': num1 <= num2,
      ' = ': num1 === num2,
      ' != ': num1 !== num2
    };

    let signs = '';
  
    for (let [sign, result] of Object.entries(comparison)) {
        if (result) {
        signs += sign;
      }
    }
  
    console.log(`${num1} ${signs} ${num2}`);

}
  
compareRandomNumbers(0, 100); 
compareRandomNumbers(2, 5);
compareRandomNumbers(100,-5)
compareRandomNumbers(-3,-10)
