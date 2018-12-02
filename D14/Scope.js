function hi(){
    var greetings = "hi";
    console.log("Say: "+greetings);
    
    function sayYa(newInput){
        greetings = newInput;
        console.log('Say:'+greetings);
    }

    function sayCool(newInput){
        var cool = newInput;
        console.log('Say: '+cool);
    }

    sayYa("Yo");
    sayCool("Coole");

    console.log("Say" + greetings);
}

var  j = new hi();
console.log(j.greetings);