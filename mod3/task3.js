function parity(number){
    if (Math.abs(number) % 2 === 1) {
        console.log("Число нечётное");
    } else {
        console.log("Число чётное");
    }   
}

parity(1)
parity(-1)
parity(2)
parity(212)