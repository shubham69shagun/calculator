let input = document.getElementById("screen");
let buttons = document.getElementsByTagName('button')

for(item of buttons){
    item.addEventListener('click',(e)=>{
        let text= e.target.innerText;
        if(text == 'C'){
            input.value = '';
        }
        else if(text == '='){
            input.value = eval(input.value);
        }
        else{
            input.value = input.value+text;
        }
    })
}