let _num1=123
//type annotation
let _str:string="hello"
let _num3;
_num3=100.49
console.log("type:",typeof _num3)
let X:any = [10,20,30]
X=123
console.log("type:",typeof X)
let condition:boolean=true
console.log(condition)
var add=function(a:number,b:number):number{
    return a+b
}
console.log(add(12,30))
function greetings(msg:string):void{
    console.log("greetings:",msg)
}
greetings("hello")
var names:string[]=["Rose","Ria"]
names.push("anna")
names.push("athira")
console.log(names)
var names1:string[] = names.filter((i)=>{
    if(i.startsWith("R"))
    {
        return i
    }
})
console.log(names1)