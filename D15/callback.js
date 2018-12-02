// JavaScript 所有的事情都是同時進行 所以運行上要做些改變
//才能有順序性

function wash(callback){
    setTimeout(function(){
        console.log("wash");
        callback.call();
    },1000);
}

function eat(callback){
    setTimeout(function(){
        console.log("eat");
        callback.call();
    },5000);
}

function running(){
    console.log('running');
}

function doHouseWork(callback){
    console.log('doing house works');
    callback.call();
}

doHouseWork(function(){

    wash(function(){
        eat(function(){
            running();
        });
    });
});