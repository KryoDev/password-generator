var x ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

function generate() {
    var password='';
    for(let i = 0; i <= 20; i++) {
        var c = Math.floor((Math.random()*x.length)+0);
        password+= x.charAt(c);
    }
    console.log(password);
    document.getElementById('pass').innerHTML = "<br> <h1 class='generated'>" + password + "</h1>";
}