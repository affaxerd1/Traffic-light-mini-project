const lights= document.querySelectorAll(".circle");
var counter=0;
setInterval(change, 1000);
 function change() {
 	
 	
 	lights[counter].className='circle';
 	counter ++;
 	if (counter>2) {
 		counter=0;
 	}


 	var current=lights[counter];

 	current.classList.add(current.getAttribute("color"));

 }





