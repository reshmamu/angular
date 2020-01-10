function addition(x:number,y:number):void
function addition(a:string,b:string):void
function addition(i:any,j:any):void{

    console.log(i,j)
}
addition(10,100)
 addition("hello","world")
function getValues(x:string|string[]){
        if(typeof(x)=="string"){
            console.log("message",x)
        }
        else{
            for(let e of x){
                console.log(e)
            }
        }
    }
    getValues("hello all")
    getValues(["a","b","c"])

    let values:number[]=[10,11,22,13,23] //array declaration
    let mapdary=values.map((x)=>{
        return x**2
    })

    let filterary=values.filter((x)=>{
        if(x%2==0){
        return x**2
        }
    })
    console.log(mapdary)
    console.log(filterary)