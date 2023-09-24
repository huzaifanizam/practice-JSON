let obj = {
    name: "john",
    subject: "math",
    roll: "10",
    isActive: true,
    0: "car",
    electives: [
        {name:"123" , teacher: "alis",grade:"25"},
        {name:"xyz"},
        {name:"abc"}
    ],
    bio:{
        age:"23",
        isSingle: true,
        nat: "pak",
        rel:"islam"
    }

}

console.log(obj.electives[0].teacher);
console.log(obj.electives[0].name);
console.log(obj["name"]);
console.log(obj["subject"]);
console.log(obj["roll"]);
console.log(obj["isActive"]);
console.log(obj[0]);

obj["name"] = "huzaifa";
obj["subject"] = "english";
obj["roll"] = "20";
obj["isActive"] = false;
obj[0] = "bus";


console.log(obj["name"]);
console.log(obj["subject"]);
console.log(obj["roll"]);
console.log(obj["isActive"]);
console.log(obj[0]);

console.log(obj);