const fs = require("fs");

const users = require("./users");

let user = {

    name: "saps1",
	age: 25,
	language: ["Node", "React", "Graphq1"]
};

let user1= {
    name: "Sap2",
	age:24,
    language: ["MSA","Graphq1"]	
};

users.unshift(user)
users.push(user1)

fs.writeFile("users2.json", JSON.stringify(users), err =>{
      
     if(err) throw err;
     
     console.log("Done writing");
});	 
