//Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
//Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.

function comparisonFraction(num1, num2, precision)
{    
    let firstFraction = Math.round(num1 % 1 * Math.pow(10,precision));
    let secondFraction = Math.round(num2 % 1 * Math.pow(10,precision));
    
    console.log('numbers:',num1,num2)

    let comparison = {
        ' > ': firstFraction > secondFraction,
        ' < ': firstFraction < secondFraction,
        ' >= ': firstFraction >= secondFraction,
        ' <= ': firstFraction <= secondFraction,
        ' = ': firstFraction === secondFraction,
        ' != ': firstFraction !== secondFraction
      };

    let = signs = '';

    for(let [sign, result] of Object.entries(comparison)) {
        if (result) {
        signs += sign;
        }
    }
    console.log(`${firstFraction} ${signs} ${secondFraction}`)
}

comparisonFraction(13.123456789, 2.123, 5)
comparisonFraction(13.890123, 2.891564, 2)
comparisonFraction(13.890123, 2.891564, 3)

