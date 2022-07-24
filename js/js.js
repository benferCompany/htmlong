let click = true;
document.getElementById('sesion').addEventListener('click',(e)=>{
    e.preventDefault()
    if(click){
        document.getElementById('divSesion').style="display:flex; justify-content:center;"
        click=false;
    }else{
        document.getElementById('divSesion').style="display:none;"
        click=true;
    }
    
})