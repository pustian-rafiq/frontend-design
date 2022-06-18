const move = () => {
    var box = document.getElementById("boxItem")
   
    const top=50;
    const left =0;
    const leftPos = left;
    const topPos = top;
    const initialBoxHeight = 100;
    const initialBoxWidth = 100;
    const anim = setInterval(moveRightDown, 1000);

  const moveRightDown = () => {

       const winScreenWidth =  screen.innerWidth 
       const winScreenHeight =  screen.innerWidth 

         if(left >= (winScreenWidth - 110) || top > (winScreenHeight - 220)){

             const up = setInterval(moveLeftTop,1000)

             function moveLeftTop(){

                if(top <= 50 || left <= 0){
                    clearInterval(up)
                }
                top  = top - 10;
                left =  left - 10
                box.style.top = top+"px";
                box.style.left = left+"px";
             }

         }else{
             top  = top + 10;
             left =  left+10;
             box.style.top = top+"px";
             box.style.left = left+"px";
         }
     }
}