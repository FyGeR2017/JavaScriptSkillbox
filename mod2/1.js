
function calculateSquare(x1, y1, x2, y2) 
{
    let first_side = Math.abs(x1 - x2);
    let second_side = Math.abs(y1 - y2);
  
    return  (first_side*second_side)
}

console.log(calculateSquare(2,3,10,5));
console.log(calculateSquare(10,5,2,3));
console.log(calculateSquare(-5,8,10,5));
console.log(calculateSquare(5,8,5,5));
console.log(calculateSquare(8,1,5,1));