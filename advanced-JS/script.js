
var name = "global";

var fun3 = function() {
    console.log("From func3");
    console.log(this);
    console.log(this.name);
};

var obj3 = {
    name: "obj3",
    fun3: fun3
};

obj3.fun3();