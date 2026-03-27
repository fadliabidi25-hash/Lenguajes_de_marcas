const persona=   {
    id:1,
    nombre: "Alfredo"
   }
  //objeto -> json : json.stringify 
  const mijson=JSON.stringify(persona);
console.log("paso a json", mijson); //instruccion javascript

//json -> objeto javascript
console.log("de json a objeto", JSON.parse(mijson));