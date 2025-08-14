document.querySelector('#name').innerHTML = 'Luffy';
let greetings = "Welcome back";
let count = 0;
let save = '';
let total = 0;
// document.querySelector('#heading').innerHTML = greetings +" "+ name;
let update = document.querySelector('#count-el');

document.querySelector('.add').addEventListener('click', function(){
    count+=1;
    update.innerHTML = count;
});

document.querySelector('.save').addEventListener('click', function(){
    total += count;
    document.querySelector('#total').innerText = total;
    save += count + ' - ';
    document.querySelector('.previous').innerText = "Previous Saving Points: " + save;
    count = 0;
    update.innerHTML = count;
})