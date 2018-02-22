function mathtext() {
    var a=document.MFTF.RandomText.value;

    alert("!" + a);
    var b=document.MFTF.ReverseText.value;
    alert("!"+ b);

    //var a = randomtext.length;
    alert("Lenght "+ a.length);
    //var b = reversetext.length;
    alert("Lenght "+ b.length);


    if (a.length===b.length) {
        alert("You good bro");

        for (var i = 0; i < a.length; i++) {
            alert("i = "+i + a.charAt(i));
            if (a.charAt(i) != b.charAt(a.length -i-1));
                alert("das");
                return;
        }
    }
            else
        {
            alert("Text .")
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


