function comparison(num1, num2, precision){
    
    let normalized_fraction1 = Math.round(num1 % 1 * Math.pow(10,precision));
    let normalized_fraction2 = Math.round(num2 % 1 * Math.pow(10,precision));
    
    console.log('numbers:',num1,num2)

    console.log('greater',normalized_fraction1 > normalized_fraction2);
    console.log('less',normalized_fraction1 < normalized_fraction2);
    console.log('greaterEqual',normalized_fraction1 >= normalized_fraction2);
    console.log('lessEqual',normalized_fraction1 <= normalized_fraction2);
    console.log('equal',normalized_fraction1 === normalized_fraction2);
    console.log('notEqual',normalized_fraction1 !== normalized_fraction2);
}

comparison(13.123456789, 2.123, 5)
comparison(13.890123, 2.891564, 2)
comparison(13.890123, 2.891564, 3)

