
window.onload = function()
{
  function boxContainer(){

      let number = 0.1;

      for(let i = 0; i < 20; i++){

        let box = document.createElement("div");
        box.className = "box";
        if(i%4 == 1)
        {
          box.style.opacity = number;
          number = (number+0.2)%1;
        }
        else if(i%4 == 2)
        {
          box.style.opacity = number;
          number = (number+0.2)%1;
        }      
        else if(i%4 == 3)
        {
          box.style.opacity = number;
          number = (number+0.2)%1;
        }
        else 
        {
          box.style.opacity = number;
          number = (number+0.2)%1;
        }

      

        document.getElementById( 'BoxContainer').appendChild(box);

        box.addEventListener('click', function colorChange(){
          if(box.style.backgroundColor == 'salmon')
            box.style.backgroundColor = 'white';
          else
            box.style.backgroundColor = 'salmon';
        });
      }


};

boxContainer();  

var plus = document.getElementById("plus");
let originalOpacity = document.getElementsByClassName("box")[3].style.opacity;

  plus.addEventListener('click', function(){
    if(document.getElementsByClassName("box")[3].style.opacity > 0.1)
    {
        document.getElementsByClassName("box")[3].style.opacity-=0.1;
    }else
    {
      document.getElementsByClassName("box")[3].style.opacity = originalOpacity;
    }

  });
}

