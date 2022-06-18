  

// Create a move function that moves the box

  const move = () => {
        var box = document.getElementById("boxItem")
       
        var topPosition=50;
        var leftPosition =0

        //Call a function that move the box to bottom and right per second
        var rightDown = setInterval( () => {
 
        //Take screen inner width and height
           const innerScreenWidth =  window.innerWidth 
           const innerScreenHeight =  window.innerHeight 
 
             if( leftPosition >= (innerScreenWidth - 110) || topPosition > (innerScreenHeight - 110)){

                /*
                When the box reach at the bottom or right edge of the screen,
                then call another function to move backward from that position
                */

                 const leftTop = setInterval( () => {

                    if(topPosition <= 50 || leftPosition <= 0){
                        //when the box reach initial position, then we clear the moveLeftTop and starts moving again
                        clearInterval(leftTop)
                    }
                    topPosition  = topPosition - 10;
                    leftPosition =  leftPosition - 10
                    box.style.top = topPosition+"px";
                    box.style.left = leftPosition+"px";
                 },1000)

                 

             }else{

                topPosition  = topPosition + 10;
                 leftPosition =  leftPosition+10;
                 box.style.top = topPosition+"px";
                 box.style.left = leftPosition+"px";
             }
        }, 1000);

    } 
    
  // Call the move function after loading the page
   setTimeout(()=> {
    move()
   },1000)
  
