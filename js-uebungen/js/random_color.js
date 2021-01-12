let farben = [
    'yellow',
    'brown',
    'black',
    'green',
    'blue',
];

function randomColor() {

    let zufallszahl = Math.floor( Math.random() * farben.length );

    return farben [zufallszahl];
}

$('button.random').click(function(){

    $('#farbe').css({
        'background-color' : randomColor()
    });

});