function filter(objects, prop, value) {

    let filtered = [];
  
    for (let obj of objects) {
      if (obj[prop] === value) {
        filtered.push(obj); 
      }
    }
  
    return filtered;
  }

  let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
  ];
  
  console.log(filter(objects, 'name', 'Иван'));