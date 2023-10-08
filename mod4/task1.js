function randomArray(m,n, count){
    let min = Math.min(n, m);
    let max = Math.max(n, m);
  
    let array = []

    for (let i = 0; i < count; i++){
        array.push((Math.floor(Math.random() * (max - min + 1)) + min))
    }
    console.log(array)   
}

randomArray(0,100,100)
randomArray(2,5,50)
randomArray(100,-5,70)
randomArray(-3,-10,42)


