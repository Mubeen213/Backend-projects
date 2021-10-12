
console.log('This file is loaded');

// fetch the elements by their ids
const open = document.getElementById('open');
const close = document.getElementById('close');
const wrapper = document.getElementById('wrapper');

// on  clicking the create task button show the form
open.addEventListener('click',function(){
  wrapper.classList.add('show');
});

// close the form by remove the show class
close.addEventListener('click', ()=>{
  wrapper.classList.remove('show');
});
