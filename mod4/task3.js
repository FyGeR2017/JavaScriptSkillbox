function createShuffledArray(len) {

    const array = [];
    
    for (let i = 0; i < len; i++) {
      array.push(i + 1);
    }
  
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }
  
  function findIndex(array, n) {
    
    console.log(array)

    let index = -1;
  
    for (let k = 0; k < array.length; k++) {
      if (array[k] === n) {
        index = k;
        break;
      }
    }
  
    if (index >= 0) {
      return "Индекс элемента = " + index;
    } else {
      return 'Элемент не найден';
    }
  }

console.log(findIndex(createShuffledArray(5),3))
console.log(findIndex(createShuffledArray(7),1))
console.log(findIndex(createShuffledArray(3),7))