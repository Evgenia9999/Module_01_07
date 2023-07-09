const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr) => {

    for (i = 0; i < failedStudents.length; i += 1) {

    const a = arr.indexOf(failedStudents[i]);
    arr.splice(a, 1);
    
    }

    console.log('allStudents: ', allStudents);
}

filter(allStudents);




