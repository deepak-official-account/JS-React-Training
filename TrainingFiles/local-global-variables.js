// Local variables
function abc() {
    var x = 10;//local variable  

    if (10 < 13) {
        var y = 20;//JavaScript local variable  
    }

    console.log("x", x);
    console.log("y", y);
}
abc();

//Global variables 
var data = 200;//gloabal variable  
function a() {
    console.log(data);
}
function b() {
    console.log(data);
}
a();//calling JavaScript function  
b();


function m() {
    window.value = 100;//declaring global variable by window object  
}
function n() {
    alert(window.value);//accessing global variable from other function  
}  

m()
n()