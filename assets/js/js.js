// const files = document.querySelector('input')

// files.addEventListener('change',(e)=>{
//     let doc = e.target.files
//     // for (let i = 0; i < doc.length; i++) {
//     //     console.log(doc[i].name);
//     // }
//     console.log(doc[0].name);
// })

// //obj in local storage

// let obj = {
//     namee:'Togrul',
//     surname:'aaa',
//     password:'12345678'
// }
// // localStorage.setItem('obj', JSON.stringify(obj))
// console.log(obj);
// console.log(JSON.stringify(obj));
// // let namee = localStorage.setItem('username','Togrul')
// // let surname = localStorage.setItem('Surname','.')
// // let password = localStorage.setItem('password','12345678')

// const body = document.querySelector('body')

// const p_name = document.createElement('p')
// const p_surname = document.createElement('p')
// const p_password = document.createElement('p')

// let getObj =  JSON.parse(localStorage.getItem('obj'))

// p_name.textContent = 'Name: '+getObj.namee
// p_surname.textContent= 'Surname:'+getObj.surname
// p_password.textContent= 'Password: '+getObj.password

// body.append(p_name,p_surname,p_password)

// // const body = document.querySelector('body')

// // const p_name = document.createElement('p')
// // const p_surname = document.createElement('p')
// // const p_password = document.createElement('p')

// // p_name.textContent = 'Name: '+localStorage.getItem('username')
// // p_surname.textContent= 'Surname:'+localStorage.getItem('Surname')
// // p_password.textContent= 'Password: '+localStorage.getItem('password')

// // body.append(p_name,p_surname,p_password)

//Task2

let data = [];
const addInput = document.getElementById("addInput");
const addButton = document.getElementById("addButton");
const ul = document.getElementById("ul");

if (JSON.parse(localStorage.getItem("data"))) {

    const getData = JSON.parse(localStorage.getItem("data"));
    data = JSON.parse(localStorage.getItem("data"));

    for (let i = 0; i < getData.length; i++) {

        renderOrCreate(getData[i]);

    }
}

addButton.addEventListener("click", () => {

    if (addInput.value.trim() === "") {
        return -1;
    }

    data.push(addInput.value);
    localStorage.setItem("data", JSON.stringify(data));

    renderOrCreate(addInput.value);

    addInput.value = "";
});

function renderOrCreate(content) {

    const li = document.createElement("li");
    const checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    li.textContent = content; //getData[i]

    ul.append(li, checkbox);

    checkbox.addEventListener("click", () => {

        li.classList.toggle("line");
        
    });
}
