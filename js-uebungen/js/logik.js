var mganzZahl = 4;
//console.log(ganzZahl);

ganzZahl = 5;
//console.log(ganzZahl);

ganzZahl = 5 + 4;
//console.log(ganzZahl);

ganzZahl = 4 + ganzZahl * 2.5;
//console.log(ganzZahl);

var aufsteigendeZahl = 1;
//console.log(aufsteigendeZahl1);

aufsteigendeZahl++;
//console.log(aufsteigendeZahl1);

var absteigendeZahl = 10;

//console.log(absteigendeZahl10);

var zahlAlsText = "3e";
//console.log(zahlAlsText);
zahlAlsText = parseInt(zahlAlsText);
//console.log(typeof zahlAlsText);

zahlAlsText = parseInt(zahlAlsText);
//console.log(zahlAlsText);
//console.log(typeof zahlAlsText);

//console.log(zahlAlsText * 3);


var number1 = "1";
var number2 = "7";

//console.log(number1 * number2);

var spruch = 'Hallo,';
//console.log(spruch)

spruch = spruch + 'Welt!';
//console.log(spruch);

spruch = '-=[' + spruch + ']=-';
//console.log(spruch);


var inputFeld1 = '<input type="text" value="test" />';
var inputFeld2 = "<input type=\"text \" value=\"test\">";
//console.log(inputFeld1, inputFeld2);

//document.write('hallo');
//document.write('<br> ich bin eine neue Code-Zeile');


var farben = [
    'rot', 
    'gelb', 
    'grün'
];

//console.log(farben [2]);

var farbenAlsText = farben.join(' / ');
//console.log(farbenAlsText);

var katalog = [
    'Inhaltsverzeichnis',
    ['Absatz 1', 'Absatz 2'],
    'Kapitel 2'
];

//console.log( katalog );

katalog.pop(); //letzte Stelle wird gelöscht
katalog.push('Kapitel 5'); // an die letzte Stelle wird der neue Eintrag hinzufefügt


/*

    Kommentar auf
    mehreren Zeilen

*/


var neuesArry = [];
//console.log(neuesArry[0]);

katalog[0] = katalog[0] + 'NEU';
//console.log(katalog);

var speicherplatzzugriffsname = 'groesse';

var ich  = {

    vorname: 'Robert',
    nachname: 'Schiefer',
    groesse: '180cm',
    alter: 40,

    kopf: {
        augen: 'braun',
        haare: 'schwarz'
    }

};

//console.log('Hallo, ich bin ' + ich.vorname + '!');
//console.log ('Aktuell bin ich ' + ich.alter + ' Jahre alt. ');
//console.log ('Meine Augen haben die Farbe ' + ich.kopf.augen + '');
//console.log(ich [speicherplatzzugriffsname]);

const USER_NAME = 'robert';
console.log(USER_NAME);

let example1 = 'hui!';

{
  
    console.log(example1);
   example1 = 'neuer Wert aus dem Scope';   
}

console.log(example1);

//console.log(example1);



