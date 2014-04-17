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
          
          var classBlackValue =document.querySelectorAll(".black");
          var classWhiteValue = document.querySelectorAll(".white");
          var classRedValue = document.querySelector(".red");
    
         if(classBlackValue.length < 8){
             classRedValue.className = "black";
          }
          else if(classWhiteValue.length < 8){
              classRedValue.className = "white";
          }
          
          var changeRed = event.target;
          changeRed.className = "red";
      });
    
  }
    
    
}
