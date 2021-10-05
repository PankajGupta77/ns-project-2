var x;
var m=0;
function start()
{
 x=setInterval(anim,1);

  function anim()
  {
      
      console.log(m);
        if(m==1350)
        {
            clearInterval(x);           
        }
        
        else
        {
            m=m+1;
            document.getElementById("im").style.visibility="visible";
            var target=document.getElementById("im");
            // target.style.marginLeft=m+'px';
            target.style.marginLeft=m+'px';
        }
        if(m==1000){
            
        }
   }

}
function stop()
{
    clearInterval(x)
}


