<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<title>Using Arrays</title>
<style type="text/css">
	.imgCaption {font-family: verdana; font-size: 20px; margin-bottom: 20px; text-align: center}
	.imgStyle {border: 7px double black}
</style>
	<script type="text/javascript">
	
	if (window.addEventListener) {
    // DOM2 standard
    window.addEventListener("load", loadEventListeners, false);
	}
	else  {
    	// IE8 and earlier
    	window.attachEvent("onload", loadEventListeners);
	}

	 function loadEventListeners() {
	    if (document.addEventListener) {
		   document.getElementById("myBtn").addEventListener("click", changeIt,  false);
		
		}
		
		else {
		document.getElementById("myBtn").attachEvent("onclick", changeIt);
		
		}
	 }
	 
	 function changeIt() {
	   //condensed Array
	   var myText= new Array("Dog", "Bunny",  "Cat", "Rat",  "Gerbil", "Bears");
	   
	   //Literal Array
	   //var myText = ["Dog", "Bunny",  "Cat", "Rat",  "Gerbil", "Bears"];
	   
	   //regular Array
	   var myImage = new Array();
	   myImage[0]="images/dog.jpg";
	   myImage[1]="images/bunny.jpg";
	   myImage[2]="images/cat.jpg";
	   myImage[3]="images/rat.jpg";
	   myImage[4]="images/gerbil.jpg";
	   myImage[5]="images/bears.jpg";
	   
	   for(var i=0; i < myImage.length; i++){
	     var imgTag= document.createElement("img");
		 imgTag.src= myImage[i];
		 document.body.appendChild(imgTag);
		 imgTag.className = "imgStyle";
		 
		 imgTag.index = i;// using the index property to re-assign an index back to each image. This is needed for use in the setDivWidth function
		 
		 if(document.addEventListener) {
		    imgTag.addEventListener("load", setDivWidth, false);
			
		 }
		 //instead of appending to the body, you can append to a specific area of the page by referencing the id of a container. For example:
		 
		 // var mainContainer = document.getElementById("idOfTag");
		  //mainContainer.appendChild(imgTag);
		  
		  var brTag= document.createElement("br");
		  document.body.appendChild(brTag);
		  //document.body.appendChild(doucment.createElement("br"));
		  
		  var divTag = document.createElement("div");
		  //divTag.innerHTML = myText[i]; //this accomplishes the same thing as createTextNode below
		  divTag.appendChild(document.createTextNode(myText[i]));
		  document.body.appendChild(divTag);
		   divTag.className = "imgCaption";
		   divTag.id = "div" + i;
	   
	   }
	   
	   if(document.addEventListener){
	      document.getElementById("myBtn").removeEventListener("click", changeIt, false);
	   }
	   
	   else {
	      document.getElementById("myBtn").detachEvent("onclick", changeIt);
	   }
	   
	 }
	
	
	 function setDivWidth(targetImg) {
	    var imgWidth = targetImg.target.width;
		
		var imgIndex = targetImg.target.index;
		
		document.getElementById("div" + imgIndex).style.width = imgWidth + "px";
		
	 }
	</script>
</head>
<body>

	<input type="button" value="Click Here to Show Stuff" id="myBtn" /><br /><br />


</body>
</html>