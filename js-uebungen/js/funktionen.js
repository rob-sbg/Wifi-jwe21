let userNameFromDataBase= ' Robert ';

function sayMyName(name) {
     if(checkMyInput(name) == true) {
        console.log('Your name is' + name);
    }
}

sayMyName(' Robert' );
sayMyName( userNameFromDataBase );


function checkMyInput(input) {
    if( typeof input == 'string' ) {
        //console.log('yes, is a string');
        return true;
    } else {
        //console.log('Your input is not a Name (or a String)');
        return false;
    }
}
let ergebnisMeinerFunktion = checkMyInput('Robert');