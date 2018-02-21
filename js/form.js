function mathtext() {
    // alert("ddd");
    var randomtext=document.MFTF.RandomText.value;

    alert("!!" + randomtext);
    var reversetext=document.MFTF.ReverseText.value;
    alert("!!!"+ reversetext);

    if (randomtext==reversetext){
        return true;
    }
    else {
        return false;
    }
}

function random() {
    var text = "";
    var posible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
        text += posible.charAt(Math.floor(Math.random() * posible.length))
    return text;
}

function random1(){

    document.getElementById("RandomText").value  = random();
    }






// console.log("!!!"+random())



