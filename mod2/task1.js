//Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка; x2, y2 — вторая точка. 
//Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.
//Напомним, что площадь прямоугольника — это произведение ширины и высоты.

function calculateSquare(x1, y1, x2, y2) 
{
    let first_side = Math.abs(x1 - x2);
    let second_side = Math.abs(y1 - y2);
    
    console.log('x1 =', x1, 'y1 =', y1, 'x2 =', x2, 'y2 =', y2)
  
    console.log('square =', first_side*second_side)
}

calculateSquare(2,3,10,5)
calculateSquare(10,5,2,3)
calculateSquare(-5,8,10,5)
calculateSquare(5,8,5,5)
calculateSquare(8,1,5,1)