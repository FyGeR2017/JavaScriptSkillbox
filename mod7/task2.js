function createStudentCard(studentObj){

    let studentCard = document.createElement('div');

    studentCard.innerHTML = `
    <h2>${studentObj.name}</h2>
    <span>Возраст ${studentObj.age} лет</span>
    `;

    document.body.appendChild(studentCard);
}

let student = {
    name: 'Александр',
    age: 18,    
};

createStudentCard(student)