const hexlist = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let colorBg = document.querySelector('#color-list');
let imgBg = document.querySelector("#img-list");
let colorPicker = document.querySelector('#color-picker');
const randBtn = document.getElementById('random-btn');
let imgImport = document.getElementById('customFile');
const resetBtn = document.getElementById('reset-btn');

colorBg.addEventListener('change',function(){
    if (colorBg.value=='red'){
        document.body.style.backgroundImage='none';
        document.body.style.backgroundColor='#db3545';
    }
        else if (colorBg.value=='orange'){
            document.body.style.backgroundImage='none';
            document.body.style.backgroundColor='#fc9642';
        }
        else if (colorBg.value=='yellow'){
            document.body.style.backgroundImage='none';
            document.body.style.backgroundColor='#ffcd38';
        }
        else if (colorBg.value=='green'){
            document.body.style.backgroundImage='none';
            document.body.style.backgroundColor='#1a8754';
        }
        else if (colorBg.value=='blue'){
            document.body.style.backgroundImage='none';
            document.body.style.backgroundColor='#0d6dfc';
        }
        else if (colorBg.value=='green'){
            document.body.style.backgroundImage='none';
            document.body.style.backgroundColor='#1a8754';
        }
        else if (colorBg.value=='purple'){
            document.body.style.backgroundImage='none'; 
            document.body.style.backgroundColor='#8b68cc';
        }
        else if (colorBg.value=='gray'){
            document.body.style.backgroundImage='none';
            document.body.style.backgroundColor='#6b757d';
        }
})

imgBg.addEventListener('change',function(){
    if (imgBg.value=='default-img'){
        document.body.style.backgroundColor='';
        document.body.style.backgroundImage='url(../img/bg.jpg)';
    }
    else if (imgBg.value=='cozy-room'){
        document.body.style.backgroundColor='';
        document.body.style.backgroundImage='url(../img/cozy.jpeg)';
    }
    else if (imgBg.value=='fireplace'){
        document.body.style.backgroundColor='';
        document.body.style.backgroundImage='url(../img/fireplace.jpg)';
    }
    else if (imgBg.value=='nature'){
        document.body.style.backgroundColor='';
        document.body.style.backgroundImage='url(../img/nature.jpg)';
    }

})

randBtn.addEventListener('click',function(){
    let hexColor = '#';

    for (let i = 0; i < 6; i++){
        hexColor += hexlist[getRandomNumber()]
    }

    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hexlist.length)
}

colorPicker.addEventListener('change',function(){
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor=colorPicker.value;}
)

imgImport.onchange = function(){
    document.body.style.backgroundColor='';
    document.body.style.backgroundImage=URL.createObjectURL(imgImport.files[0]);

}

resetBtn.addEventListener('click',function(){
    document.body.style.backgroundImage='url(../img/bg.jpg)';
    document.body.style.backgroundColor='';
})