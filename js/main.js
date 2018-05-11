var models = [

{
  name:"GT350R",
  image:"img/3.jpg",
  price:"$64,740",
  info:"The GT350 Track Attack is a complimentary high-performance driving experience for Shelby® GT350/GT350R owners. This one-day event is designed to build the high-performance driving skills that will help you get the most out of your new GT350/GT350R. For more information, just go to www.gt350trackattack.com or call 435-27-SPEED to register."
  
},

{
  name:"GT",
  image:"img/5.jpg",
  price:"$35,190",
  info:"Move like a legend.The 2017 Ford Mustang is a high performance, sport coupe that competes with the Chevrolet Camaro and Dodge Challenger. Traditionally, the Mustang has been an enduring symbol for muscle car enthusiasts. The Shelby GT350 will be covered in a separate overview. "
  
}

];

function fun(){
  var input = document.getElementById("input").value
  var h1 = document.getElementById("name")
  var image = document.getElementById("img")
  var h5 = document.getElementById("price")
  var p = document.getElementById("para")
  for(var i = 0 ; i < models.length ; i++){
    if(input == models[i].name){
      h1.innerHTML = models[i].name
      image.src= models[i].image
      h5.innerHTML = models[i].price
      p.innerHTML = models[i].info
      m.innerHTML = models[i].m

    }
  }

}