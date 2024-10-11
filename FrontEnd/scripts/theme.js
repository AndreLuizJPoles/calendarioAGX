const body = document.querySelector('body');

function changeTheme(){
    if(body.style.backgroundColor === 'white'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        localStorage.setItem('theme', 'dark');
    }else{
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        localStorage.setItem('theme', 'light');
    }
}

window.addEventListener('load', function(){
    if(this.localStorage.getItem('theme') === 'dark'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
});