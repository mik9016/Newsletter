import style from "./css/index.scss"
//VARIABLES
const name = document.getElementById('floatingInput1');
const email = document.getElementById('floatingInput2');
const btn = document.getElementById('btn');

const URL = 'http://localhost:3000/';



btn.addEventListener('click', e=>{
    e.preventDefault();
    const data = {
        name: name.value,
        email: email.value
    }
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => console.log('Succes: ', data))
        .then(
            name.value = '',
            email.value = ''
        )
        .catch(err=> {
            console.log('Error: ', err )
        })

});


