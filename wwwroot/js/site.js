////DOM
////Document Object Model

//document.querySelector('p').innerHTML


//document.querySelector('p strong').innerText = 'hello world';

//document.querySelector('.metin').innerText = 'Nasılsınız?';

//////querySelector tek eleman üzerinde işlem yapar. İlk bulduğu eleman üzerinde işlem yapar. Seçeceği başka bir eleman varsa onu göz ardı eder.

//function addTodo(task) {
//    todoList.innerHTML += `<li>${task}</li>`;
//}

//function handleSubmit(e) {
//    e.preventDefault();
//    addTodo(todoForm["todo"].value);
//    todoForm.reset();
//}

//todoForm.addEventListener('submit', handleSubmit)

//function clearTodo() {
//     todoList.innerHTML = '';
//}

//clearTodoBtn.addEventListener('click', clearTodo)






////Adres ödevi
//function addAddress(address) {

//    addressList.innerHTML += `<tr><th>${address}</th></tr>`;
//}

//function handleSubmit(e) {
//    e.preventDefault();
//    addAddress(addressForm["FullName"].value);
//    addAddress(addressForm["PhoneNumber"].value);
//    addAddress(addressForm["Address"].value);
//    addressForm.reset();
//}

//addressForm.addEventListener('submit', handleSubmit)

//function clearTodo() {
//    addressList.innerHTML = '';
//}

//clearAddressBtn.addEventListener('click', clearTodo)







////adres defteri ders odev
//let persons = [
//    {
//        adSoyad: "Miray Karagöz",
//        ePosta: "mmiraykaragoz@hotmail.com",
//        telefon: "5392995077",
//        cinsiyet: "Kadın"
//    },
//    {
//        adSoyad: "Orhan Ekici",
//        ePosta: "orhanekici@gmail.com",
//        telefon: "5344356789",
//        cinsiyet: "Erkek"
//    },
//    {
//        adSoyad: "Nihat Duysak",
//        ePosta: "nihatdy@gmail.com",
//        telefon: "4895920109",
//        cinsiyet: "Erkek"
//    }
//];

//const maskOptions = {
//    mask: '{0} (500) 000 00 00'
//};

//const mask = IMask(telInput, maskOptions);

//function addRecord(person) {
//    persons.push(person);
//    render();
//}

//function render() {
//    adresTablosu.innerHTML = '';
//    for (let person of persons) {
//        adresTablosu.innerHTML += `
//    <tr>
//     <td>${person.adSoyad}</td>
//     <td>${person.ePosta}</td>
//     <td>${person.telefon}</td>
//     <td>${person.cinsiyet}</td>
//     <td><button class="btn btn-danger deleteBtn">Sil</button></td>
//    </tr>`;
//    }

//    bindEvents();
//}

//render();

//function handleSubmit(e) {
//    e.preventDefault();

//    let formData = new FormData(adresFormu);
//    let formObj = Object.fromEntries(formData);
//    addRecord(formObj);
//    adresFormu.reset();

//}

//adresFormu.addEventListener('submit', handleSubmit);

//function bindEvents() {
//    let deleteBtns = document.querySelectorAll('.deleteBtn');
//    for (let btn of deleteBtns) {
//        btn.addEventListener('click', deleteRow);
//    }
//}

//function deleteRow() {
//    if (confirm('Silmek istediğinize emin misiniz?')) {
//        this.parentElement.parentElement.remove();
//    }
//}




/*arrow function*/
//funciton sayMyName(name){
//    return `hello ${ name } `
//}

//console.log(sayMyName('Miray');

//let fruits = ["apple", "banana"];
//let moreFruits = ["orange", "mango"]
//let allFruits = fruits.concat(moreFruits);

//console.log(allFruits);
//console.log(fruits);





let users = [];

function render() {
    addUserForm.innerHTML = users.map(x => `<li data-id="${x.id}">${x.firstName} ${x.lastName}</li>`).join('');
    bindEvents();
}

function handleClick() {
    console.log(this.dataset.id);
}

function bindEvents() {
    document.querySelectorAll(`#studentList li`)
    .forEach(x => x.addEventListener('click', handleClick));
}

function init() {
    addUserForm.addEventListener('submit', handleSubmit);

    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(function (res) {
            users = res.users;
            render();
        });
    render();
}

function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(addUserForm);
    let formObj = Object.fromEntries(formData);
    console.log(formObj);
    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formObj)
    }).then(res => res.json())
        .then(function (res) {
            users.push(res);
            render();
        });
}

init();







////Öğrenci notları ödevi
//function calculateGrade(midterm, final) {
//    let average = ((midterm * 0.4) + (final * 0.6));
//    let grade;
//    if (average >= 90) grade = 'AA';
//    else if (average >= 85) grade = 'BA';
//    else if (average >= 80) grade = 'BB';
//    else if (average >= 75) grade = 'CB';
//    else if (average >= 70) grade = 'CC';
//    else if (average >= 65) grade = 'DC';
//    else if (average >= 60) grade = 'DD';
//    else if (average >= 50) grade = 'FD';
//    else grade = 'FF';
//    return { average, grade };
//}

//function addStudent(fullname, department, midterm, final) {
//    let { average, grade } = calculateGrade(midterm, final);
    
//    studentList.innerHTML += `
//        <tr>
//            <td>${fullname}</td>
//            <td>${department}</td>
//            <td>${midterm}</td>
//            <td>${final}</td>
//            <td>${average}</td>
//            <td>${grade}</td>
//        </tr>`;
//}

//function handleSubmit(e) {
//    e.preventDefault();
//    let fullname = studentForm["FullName"].value;
//    let department = studentForm["Department"].value;
//    let midterm = parseInt(studentForm["Midterm"].value);
//    let final = parseInt(studentForm["Final"].value);

//    if (!isNaN(midterm) && !isNaN(final)) {
//        addStudent(fullname, department, midterm, final);
//    }

//    studentForm.reset();
//}

//function clearStudents() {
//    studentList.innerHTML = '';
//}

//studentForm.addEventListener('submit', handleSubmit);
//clearStudentBtn.addEventListener('click', clearStudents);