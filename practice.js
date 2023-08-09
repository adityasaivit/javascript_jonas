let a=100
if(a==100) console.log("hello world")
const my="adithya"
const firstname="jonas"
const job="teacher"
const birthyear=1991
const year=2037
const jonas="i am "+firstname+" a"+(year-birthyear)+" year old"+job
console.log(jonas)
const jonasnew=`i am ${firstname} a ${year-birthyear}  old ${job}`
console.log(jonasnew)
console.log("strings\n with \n lines")
console.log(`strings
with
lines`)
const age1=15
const isold=(age1>=18)
if(isold){
    console.log("major😎 ,can drive the cars🚔")
}
else {
    console.log(`you are a minor,dont drive you have ${18-age1} years`)
}

let century=1991
if(birthyear<2000) {
    century=20
}else {
    century=21
}
console.log(century)
const str="2003"
console.log(Number(str)+11,str)
console.log(Number('adithya'))
console.log(typeof(NaN))
let var1=50
var1=String(var1)
console.log(var1)
console.log(typeof(var1))
console.log('23'-'10'*'2')

let n='1'+1
n=n-1
console.log(n)
let money=0
if(money)
{
    console.log("dont spent it all ;)")

}
else {
    console.log("get a job!")
}
let height=0
if(height) {
    console.log(`height was defined`)
}
else {
    console.log(`height was not defined`)
}
const a1=18
if(a1==18) console.log("from now you are an adult")
const fav=prompt("enter the favourite value?")
console.log(fav)
console.log(typeof(fav))
if(fav==23) console.log("entered number is 23")
else console.log("entered number is not 23")
if(fav!=23)
{
    console.log("why not 23")
}
const drivinglicense=true
const goodvision=true
console.log(drivinglicense)
console.log(goodvision)
console.log(!goodvision)
console.log(goodvision && drivinglicense)
console.log(goodvision || drivinglicense)
const poorvis=true
if(goodvision && drivinglicense)
{
    console.log("you can drive")
}
else{
    console.log("you cannot drive")
}
