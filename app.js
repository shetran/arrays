var warriors = [
    {
      name:"Bob",
      damage:2,
      health:10,
      warrior:true
    },
    {
      name:"Jerry",
      damage:1,
      health:12,
      warrior:true
    },
    {
      name:"Mavis",
      damage:2,
      health:10,
      warrior:true
    },
    {
      name:"Morty",
      damage:4,
      health:10,
      warrior:true
    },
    {
      name:"Shorty",
      damage:10,
      health:3,
      warrior:false
    },
    {
      name:"Porty",
      damage:1,
      health:14,
      warrior:true
    },{
      name:"Perry",
      damage:2,
      health:9,
      warrior:true
    },
    {
      name:"Larry",
      damage:2,
      health:17,
      warrior:false
    }
  ]

var id = document.getElementById("output")

for(var i = 0; i <  warriors.length; i++){
    if(warriors[i].health>=10 && warriors[i].damage>=2 && warriors[i].warrior){
        if(warriors[i].name.includes("a")){
            id.innerHTML+="<br> <h1 style='color:red'>Name: " + warriors[i].name + "</h1>"
            id.innerHTML+="<br> <h2 style='color:red'>Damage: " + warriors[i].damage + "</h2>"
            id.innerHTML+="<br> <h3 style='color:red'>Health: " + warriors[i].health + "</h3><br>"
        }else{
            id.innerHTML+="<br> <h1>Name: " + warriors[i].name + "</h1>"
            id.innerHTML+="<br> <h2>Damage: " + warriors[i].damage + "</h2>"
            id.innerHTML+="<br> <h3>Health: " + warriors[i].health + "</h3><br>"
        }
    }
}