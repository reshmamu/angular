class User{
    name:string
    age:number
    mobile:number
    

    update(phoneno){
        this.mobile=phoneno
    }
    constructor(name,age,mob,type){
        this.name=name
        this.age=age
        this.mobile=mob
        this.usertype=type


    }
}
let user1:User=new User("Ron",12,58963472563)
console.log(user1)
console.log("NAME",user1.name)
console.log("AGE",user1.age)
console.log("MOBILENO",user1.mobile)

