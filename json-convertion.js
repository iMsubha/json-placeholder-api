 //object to JSON
 const user = {
    id: 124,
    name: "Mahmud",
    friendsAges: [24,25,26],
    friends:["Subha","Fairuz","Trina"]
};
const userJSON = JSON.stringify(user);

console.log("Object to JSON");
console.log("JSON:",userJSON);
//{"id":124,"name":"Mahmud"}

//JSON to object

const objectJSON = JSON.parse(userJSON);
console.log("JSON to object");
console.log("object:",objectJSON);