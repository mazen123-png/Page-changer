const pickColor = document.getElementById('pickColor')
let changebgbtn = document.getElementById('changeBackgroundColor')
let changeopbtn = document.getElementById('changeOpacity')
pickColor.oninput = () =>{
    document.body.style.backgroundColor = pickColor.value;
}
let range = document.getElementById('range')
range.oninput = () =>{
    document.body.style.opacity = range.value / 100;
}
changebgbtn.onclick = ()=>{
    pickColor.click()
}
changeopbtn.onclick = ()=>{
    if(range.value > 0){
        range.value-= 10
    }else{
        range.value += 100
    }
    
    document.body.style.opacity = range.value / 100;
}
