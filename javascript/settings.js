//-------------- background color -------------------
var button_red = document.getElementById('btn-red');
var button_orange = document.getElementById('btn-orange');
var button_yellow = document.getElementById('btn-yellow');
var button_green = document.getElementById('btn-green');
var button_blue = document.getElementById('btn-blue');
var button_purple = document.getElementById('btn-purple');
var button_gray = document.getElementById('btn-gray');

//-------------- background image -------------------
var btn_default = document.getElementById('img-default');
var btn_cozy = document.getElementById('img-cozy');
var btn_fire = document.getElementById('img-fire');
var btn_nature = document.getElementById('img-nature');


button_red.addEventListener('click',function(){
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='#db3545';
})

button_orange.addEventListener('click',function(){
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='#fc9642';
})

button_yellow.addEventListener('click',function(){
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='#ffcd38';
})

button_green.addEventListener('click',function(){
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='#1a8754';
})

button_blue.addEventListener('click',function(){
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='#0d6dfc';
})

button_purple.addEventListener('click',function(){
    document.body.style.backgroundImage='none'; 
    document.body.style.backgroundColor='#8b68cc';
})

button_gray.addEventListener('click',function(){
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor='#6b757d';
})





btn_default.addEventListener('click',function(){
    document.body.style.backgroundImage='url(../img/bg.jpg)';
    document.body.style.backgroundColor='';
})

btn_cozy.addEventListener('click',function(){
    document.body.style.backgroundImage='url(../img/cozy.jpeg)';
    document.body.style.backgroundColor='';
})

btn_fire.addEventListener('click',function(){
    document.body.style.backgroundImage='url(../img/fireplace.jpg)';
    document.body.style.backgroundColor='';
})

btn_nature.addEventListener('click',function(){
    document.body.style.backgroundImage='url(../img/nature.jpg)';
    document.body.style.backgroundColor='';
})