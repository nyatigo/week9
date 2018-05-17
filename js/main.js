//document.getElementsByClassName("one")[0].style.backgroundColor = "green";
 //var node = document.createElement("div");

 //var textnode = document.createTextNode("cooll");

// node.appendChild(textnode);

 //document.body.appendChild(node);

 //node.id = "myId"

 
 //var node = document.createElement("h1");

 //var textnode =document.createTextNode( "Evan needs a haircut and some sunshine!");

//node.appendChild(textnode);

 //document.body.appendChild(node);


 var A = document.createElement("h1");
 var B = document.createTextNode("Comment App");
 A.appendChild(B);
 A.id = "A";
 document.body.appendChild(A);
 document.getElementById("A").style.fontSize= "60px"

 var C = document.createElement("input");
 C.id = "C"
 C.setAttribute("type","text");
 C.setAttribute("placeholder","UserName:");
 document.body.appendChild(C);

 var D = document.createElement("input");
 D.id = "D"
 D.setAttribute("type","text");
 D.setAttribute("placeholder","Comment:");
 document.body.appendChild(D);

 var E = document.createElement("button");
 var F = document.createTextNode("click here");
 E.appendChild(F);
 E.id ="E" 
document.body.appendChild(E);

document.getElementById("E").onclick = function(){fun()};

function fun(){
  var input = document.getElementById("C").value;
  var comment = document.getElementById("D").value;
  
  
  var G = document.createElement("div");
 // var H = document.createTextNode("UserName:")
  //G.appendChild(H);
  document.body.appendChild(G)
  G.id = "G";
  G.innerHTML = "Username: " + input;

  var I = document.createElement("div");
  document.body.appendChild(I);
  I.id = "G";
  I.innerHTML = "Comment: " + comment;


  
  

  

}

