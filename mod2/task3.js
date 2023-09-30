//Напишите генератор двух случайных чисел в диапазоне между n и m включительно.
//Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
//Выведите два произвольных числа в консоль с помощью console.log.
//Сравните два полученных числа. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

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