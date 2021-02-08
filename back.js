var isAlt = false;
var isOne = false;

var bookName;

function getName(){
    let test = document.getElementsByClassName('page-header')[0];
    let t1 = test.getElementsByTagName('span')[0];
    bookName = t1.outerText;
    alert(bookName);
}

function KeyDown(){
    document.onkeydown = function(event){ //Event listener: once any key is pressed, run this function
/*
        if(event.key == "Alt"){ //if Alt is pressed, change the boolean of ctrlpressed to true.
            isAlt = true;
        }
        if(event.key == "1"){
            isOne = true;
        }
        if(isOne == true && isAlt == true){
            getName();

            isAlt = false;
            isOne = false;
        }
*/
       if(event.key=="1" && event.altKey){
           getName();
       }
        
    }
}

KeyDown();
