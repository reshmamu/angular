var User = /** @class */ (function () {
    function User(name, age, mob,type) {
        this.name = name;
        this.age = age;
        this.mobile = mob;
        this.usertype = type;

        
    }
    User.prototype.update = function (phoneno) {
        this.mobile = phoneno;
    };
    return User;
}());
//var user1 = new User("Ron", 12, 58963472563);
// console.log(user1);
// console.log("NAME", user1.name);
// console.log("AGE", user1.age);
// console.log("MOBILENO", user1.mobile);

function save1(){
    var name=document.getElementById("name").value 
    var usertype=document.getElementById("usert").value
    var mobile=document.getElementById("no").value 
    var age=document.getElementById("number").value 
    var obj=new User(name,usertype,mobile,age)
    
    alert(obj.name)
    alert(obj.usertype)
    alert(obj.mobile)
    alert(obj.age)


}