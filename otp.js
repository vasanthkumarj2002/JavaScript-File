// var x=Math.random()//0==>1(floatting number)
// console.log(x)//0.9754687643
// math.random  will generate random number between the range 0 to 1
// console.log(x*10000)this is a wong way because they have drawback when we can rfresh the page they number will can change the digits ...
//math.random()*(hn-ln)+ln
//to generate 4 digit number
// var result=Math.random()*(9999-1000)+1000
// console.log(result)
//to remove the decimal value..
// var otp=Math.floor(result)
// console.log(otp)

function otp()
{
  var x=Math.random()*(9999-1000)+1000
  var otp=Math.floor(x)
  console.log(otp)
  var name=document.getElementById("input1").value
  var phone=document.getElementById("phone").value
  console.log(phone)
  document.getElementById("output").innerHTML="dear" + name + "your otp is"+otp
}