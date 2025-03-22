document.getElementById('button1').addEventListener('click',function(){
    박스조작('box1','block','X1','button1');
});
document.getElementById('X1').addEventListener('click',function(){
    박스조작('box1','none','button1','X1');
});
document.getElementById('button2').addEventListener('click',function(){
    박스조작('box2','block','X2','button2')
});
document.getElementById('X2').addEventListener('click',function(){
    박스조작('box2','none','button2','X2');
});
function 박스조작(what,how,ap,disap){
    document.getElementById(ap).style.display='block';
    document.getElementById(disap).style.display='none';
    document.getElementById(what).style.display=how;
}