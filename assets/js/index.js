const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container');
open.addEventListener('click', () =>{
    container.classList.add('show-nav');
    open.classList.add('hidden');
    close.classList.remove('hidden');
} );
close.addEventListener('click', () =>{
    container.classList.remove('show-nav');
    open.classList.remove('hidden');
    close.classList.add('hidden');
} );

