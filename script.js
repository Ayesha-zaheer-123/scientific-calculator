 let display=document.querySelector(".display")
        display.innerText="";
        let buttoncontainer=document.querySelector(".buttons");
        buttoncontainer.addEventListener("click",(e)=>{
let element=document.getElementById(e.target.id);
if(element.id=="Escape") {
    cleardisplay();
}else if(element.id=="Enter"){
    calculateresult();
}else if(element.id=="Backspace") {
    backspace();
}else if(element.id=="sqrt") {
    squaret();
}else if(element.id=="log") {
    logarithm();
}else{
showdisplay(element);
}
        })
        function logarithm() {
            let result=Number(display.innerText);
            if(result<=0) {
                display.innerText="Error";
            }
            else{
                let num=Math.log10(result);
                if(num.toString().indexOf(".")!=-1){
                   display.innerText=num.toFixed(8);
                }else{
                    display.innerText=num;
                }

            }
        }
        function squaret() {
 let num = Number(display.innerText);
  let result = Math.pow(num, 2);
  if(result.toString().indexOf(".")!=-1) {
    display.innerText=result.toFixed(4);
  }else{
display.innerText=result;
  }
        }
        function cleardisplay() {
            display.innerText="";
        }

        function calculateresult() {
            try{
                let result=eval(display.innerText);
                display.innerText=result;
                if (isNaN(result) || !isFinite(result)) {
  display.innerText = "Error";
}

            }catch{
                display.innerText="Error";
            }

        }
        function backspace() {
             display.innerText = display.innerText.slice(0, -1);
        }
        function showdisplay(element) {
            if(display.innerText=="Error") {
                display.innerText="";
            }
            display.innerText+=element.innerText;
        }