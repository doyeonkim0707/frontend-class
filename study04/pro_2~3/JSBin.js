var board = document.getElementById("board");
for(var i=0; i<4; i++){
  for(var j=0; j<4; j++){
      var span = document.createElement("span");
      if(i%2 === 0){
        if(j%2 === 0)
            span.setAttribute('class', 'black');    
        else 
            span.setAttribute('class', 'white');
      }
      else{
        if(j%2 === 0)
            span.setAttribute('class', 'white');      
        else 
            span.setAttribute('class', 'black');
      }
      board.appendChild(span);
      
      var spaner = board.getElementsByTagName("span")[i*4+j];
      spaner.addEventListener('click', function(event){
          
        
          console.log(changeRed);
          var classRed =document.querySelector(".red");
          console.log(classRed);
    
         if(classRed != null){
             classRed.className = "white"; 
          }
        
          
        var changeRed = event.target;  
        changeRed.className = "red";
            
          

      });
    
  }
    
    
}
