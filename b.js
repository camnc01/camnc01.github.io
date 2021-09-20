var canvas= document.getElementById("canvas");
var ctx= canvas.getContext('2d');
var numBugs=5;
var startGame=false;
var gameOngoing=true;
var take1=true;
var take2=false;
var take3=false;
var take4=false;
var take5=false;
var finalTake=false;
var eas=false;
var mediu=false;
var har=false;
var mobile=false;
var timeUp=false;

draw();

var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
}

//check for mobile device
function isMob(){

if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
){

var elem= document.getElementById("welcome");
document.getElementById('head1').style.fontSize="35px";
document.getElementById('head2').style.fontSize="15px";

mobile=true;
} else {
mobile=false;
}

}



function number(){
return numBugs;
}


function draw(){

isMob();

  //waiting for the first click
if (eas==true || mediu==true || har==true){


waitToStart();
}


if (numBugs==0){
win();
} if (numBugs>=35){
lose();
}

}


//easyButton is clicked
function easy(){
//remove buttons
var easyBut = document.getElementById("easy");
easyBut.remove();

var medBut = document.getElementById("medium");
medBut.remove();

var hardBut =document.getElementById("hard");
hardBut.remove();

eas=true;
console.log(eas);
draw();
}

//medButton is clicked
function medium(){
//remove buttons
var easyBut = document.getElementById("easy");
easyBut.remove();

var medBut = document.getElementById("medium");
medBut.remove();

var hardBut =document.getElementById("hard");
hardBut.remove();

mediu=true;
draw();
}

//hardButton is clicked
function hard(){
//remove buttons
var easyBut = document.getElementById("easy");
easyBut.remove();

var medBut = document.getElementById("medium");
medBut.remove();

var hardBut =document.getElementById("hard");
hardBut.remove();

har=true;
draw();
}


//when first click occurs, remove welcome screen, and initial load images
function waitToStart(){


document.getElementById("prog").style.display = 'block';
//remove welcome screen
var elem= document.getElementById("welcome");
elem.parentNode.removeChild(elem);
var elem1= document.getElementById("info1");
elem1.style.display='none';
startGame=true;
var elem2= document.getElementById("canvas");
elem2.parentNode.removeChild(elem2);



//call to load initial 5 images after DOM loads
initImgs();
    var img1 = document.createElement("img");
    img1.src = "https://lh3.googleusercontent.com/pw/AM-JKLWF3IRRV3Xgv2uywUMwHbZN_8iYrSFtoXMH2zQreuiQJrvdALwQtjfyZgPVp4Qua-q_IDGRXibH9N2ZvhHjwH1aGV4C49EwYLUqNxGPCEMOkmw3CmXcsdkd3l7kiu0FlKMAs-Eh9h2VvnHJrkZ2HuS3=w1354-h1230-no?authuser=0";
    img1.width = window.innerWidth;
    img1.height = window.innerHeight;
    img1.zIndex=0;

    // Add it to the <body> tag
    var contain= document.getElementById('contain');
    document.body.appendChild(img1);
    contain.appendChild(img1);



}

function initImgs(){

//position initial images randomly
document.getElementById('saveForm1').style.marginLeft= randomX();
document.getElementById('saveForm1').style.marginTop= randomY();
document.getElementById('saveForm2').style.marginTop= randomY();
document.getElementById('saveForm2').style.marginLeft= randomX();
document.getElementById('saveForm3').style.marginTop= randomY();
document.getElementById('saveForm3').style.marginLeft= randomX();
document.getElementById('saveForm4').style.marginTop= randomY();
document.getElementById('saveForm4').style.marginLeft= randomX();
document.getElementById('saveForm5').style.marginLeft= randomX();
document.getElementById('saveForm5').style.marginTop= randomY();

document.getElementById('saveForm1').style.display= 'block';
document.getElementById('saveForm2').style.display= 'block';
document.getElementById('saveForm3').style.display= 'block';
document.getElementById('saveForm4').style.display= 'block';
document.getElementById('saveForm5').style.display= 'block';

console.log(numBugs);
//call to load delayed images
setTimeout(loadDelayed(), 2000);

}

//load delayed images
function loadDelayed(){
if (startGame==true && take1==true) {


if (mobile==true){
if (eas==true){
setTimeout(happen1, 1500);
}
if (mediu==true){
setTimeout(happen1, 1500);
}
if (har==true){
setTimeout(happen1, 1000);
}

}

if (mobile==false){
if (eas==true){
setTimeout(happen1, 2500);
}
if (mediu==true){
setTimeout(happen1, 2000);
}
if (har==true){
setTimeout(happen1, 1700);
}

}

}

}

function trackNum(){

if (eas==true){

if (mobile==true){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=65){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 2500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 2500);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 1500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 3500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 50);
console.log(numBugs);
}
} else if (mobile==false){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=65){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 3500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 3500);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 2500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 2500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 50);
console.log(numBugs);
}
}
}

if (mediu==true){

if (mobile==true){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=65){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 2500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 3500);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 5500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 4800);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 50);
console.log(numBugs);
}
} else if (mobile==false){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=65){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 2500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 2500);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 5500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 4800);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 50);
console.log(numBugs);
}
}
}

if (har==true){

if (mobile==true){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=65){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 2500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 2500);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 1400);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 2500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 50);
console.log(numBugs);
}
} else if (mobile==false){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=65){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 2500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 6000);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 4000);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 6500);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 50);
console.log(numBugs);
}
}
}

}

function happen1(){

document.getElementById('saveForm6').style.marginTop= randomY();
document.getElementById('saveForm6').style.marginLeft= randomX();
document.getElementById('saveForm7').style.marginLeft= randomX();
document.getElementById('saveForm7').style.marginTop= randomY();
document.getElementById('saveForm8').style.marginLeft= randomX();
document.getElementById('saveForm8').style.marginTop= randomY();
document.getElementById('saveForm9').style.marginLeft= randomX();
document.getElementById('saveForm9').style.marginTop= randomY();
document.getElementById('saveForm10').style.marginLeft= randomX();
document.getElementById('saveForm10').style.marginTop= randomY();

document.getElementById('saveForm11').style.marginTop= randomY();
document.getElementById('saveForm11').style.marginLeft= randomX();
document.getElementById('saveForm12').style.marginLeft= randomX();
document.getElementById('saveForm12').style.marginTop= randomY();
document.getElementById('saveForm13').style.marginLeft= randomX();
document.getElementById('saveForm13').style.marginTop= randomY();
document.getElementById('saveForm14').style.marginLeft= randomX();
document.getElementById('saveForm14').style.marginTop= randomY();
document.getElementById('saveForm15').style.marginLeft= randomX();
document.getElementById('saveForm15').style.marginTop= randomY();

document.getElementById('saveForm46').style.marginLeft= randomX();
document.getElementById('saveForm46').style.marginTop= randomY();
document.getElementById('saveForm47').style.marginTop= randomY();
document.getElementById('saveForm47').style.marginLeft= randomX();
document.getElementById('saveForm48').style.marginTop= randomY();
document.getElementById('saveForm48').style.marginLeft= randomX();
document.getElementById('saveForm49').style.marginTop= randomY();
document.getElementById('saveForm49').style.marginLeft= randomX();
document.getElementById('saveForm50').style.marginLeft= randomX();
document.getElementById('saveForm50').style.marginTop= randomY();

document.getElementById('saveForm81').style.marginLeft= randomX();
document.getElementById('saveForm81').style.marginTop= randomY();
document.getElementById('saveForm82').style.marginLeft= randomX();
document.getElementById('saveForm82').style.marginTop= randomY();
document.getElementById('saveForm83').style.marginLeft= randomX();
document.getElementById('saveForm83').style.marginTop= randomY();

if (numBugs == 5){
    document.getElementById('saveForm46').style.display='block';
    document.getElementById('saveForm47').style.display='block';
    document.getElementById('saveForm48').style.display='block';
    document.getElementById('saveForm49').style.display='block';
    document.getElementById('saveForm50').style.display='block';
    document.getElementById('saveForm6').style.display='block';
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm9').style.display='block';
    document.getElementById('saveForm10').style.display='block';
    document.getElementById('saveForm11').style.display='block';
    document.getElementById('saveForm12').style.display='block';
    document.getElementById('saveForm13').style.display='block';
    document.getElementById('saveForm14').style.display='block';
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm81').style.display='block';
    document.getElementById('saveForm82').style.display='block';
    document.getElementById('saveForm83').style.display='block';
    numBugs= numBugs + 18;
    console.log(numBugs);
    document.getElementById("file").value += 54;
    } else if (numBugs == 4){
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm12').style.display='block';
    document.getElementById('saveForm13').style.display='block';
    document.getElementById('saveForm6').style.display='block';
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm9').style.display='block';
    document.getElementById('saveForm14').style.display='block';
    document.getElementById('saveForm46').style.display='block';
    document.getElementById('saveForm47').style.display='block';
    document.getElementById('saveForm48').style.display='block';
    document.getElementById('saveForm49').style.display='block';
    document.getElementById('saveForm50').style.display='block';
    document.getElementById('saveForm81').style.display='block';
    document.getElementById('saveForm82').style.display='block';
    document.getElementById('saveForm83').style.display='block';
    numBugs= numBugs + 16;
    console.log(numBugs);
    document.getElementById("file").value += 45;
    } else if (numBugs == 3){
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm9').style.display='block';
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm12').style.display='block';
    document.getElementById('saveForm13').style.display='block';
    document.getElementById('saveForm46').style.display='block';
    document.getElementById('saveForm47').style.display='block';
    document.getElementById('saveForm48').style.display='block';
    document.getElementById('saveForm49').style.display='block';
    document.getElementById('saveForm50').style.display='block';
    document.getElementById('saveForm83').style.display='block';
    numBugs=numBugs;
    numBugs= numBugs + 12;
    console.log(numBugs);
    document.getElementById("file").value += 35;
    } else if (numBugs == 2){
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm12').style.display='block';
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm46').style.display='block';
    document.getElementById('saveForm47').style.display='block';
    document.getElementById('saveForm48').style.display='block';
    document.getElementById('saveForm49').style.display='block';
    numBugs=numBugs;
    numBugs= numBugs + 8;
    console.log(numBugs);
    document.getElementById("file").value += 24;
    } else if (numBugs == 1){
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm9').style.display='block';
    numBugs=numBugs;
    numBugs= numBugs + 4;
    console.log(numBugs);
    document.getElementById("file").value += 12;
    } else if (numBugs==0){
    win();
    }
take1=false;
take2=true;
setTimeout(trackNum(), 3000);

var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
    inputs[i].contentEditable = 'true';
}

}

function happen2(){

document.getElementById('saveForm16').style.marginTop= randomY();
document.getElementById('saveForm16').style.marginLeft= randomX();
document.getElementById('saveForm17').style.marginLeft= randomX();
document.getElementById('saveForm17').style.marginTop= randomY();
document.getElementById('saveForm18').style.marginLeft= randomX();
document.getElementById('saveForm18').style.marginTop= randomY();
document.getElementById('saveForm19').style.marginLeft= randomX();
document.getElementById('saveForm19').style.marginTop= randomY();
document.getElementById('saveForm20').style.marginLeft= randomX();
document.getElementById('saveForm20').style.marginTop= randomY();

document.getElementById('saveForm21').style.marginLeft= randomX();
document.getElementById('saveForm21').style.marginTop= randomY();
document.getElementById('saveForm22').style.marginLeft= randomX();
document.getElementById('saveForm22').style.marginTop= randomY();
document.getElementById('saveForm23').style.marginLeft= randomX();
document.getElementById('saveForm23').style.marginTop= randomY();
document.getElementById('saveForm24').style.marginLeft= randomX();
document.getElementById('saveForm24').style.marginTop= randomY();
document.getElementById('saveForm25').style.marginLeft= randomX();
document.getElementById('saveForm25').style.marginTop= randomY();

document.getElementById('saveForm51').style.marginLeft= randomX();
document.getElementById('saveForm51').style.marginTop= randomY();
document.getElementById('saveForm52').style.marginLeft= randomX();
document.getElementById('saveForm52').style.marginTop= randomY();
document.getElementById('saveForm53').style.marginLeft= randomX();
document.getElementById('saveForm53').style.marginTop= randomY();
document.getElementById('saveForm54').style.marginLeft= randomX();
document.getElementById('saveForm54').style.marginTop= randomY();
document.getElementById('saveForm55').style.marginLeft= randomX();
document.getElementById('saveForm55').style.marginTop= randomY();

document.getElementById('saveForm56').style.marginTop= randomY();
document.getElementById('saveForm56').style.marginLeft= randomX();
document.getElementById('saveForm57').style.marginLeft= randomX();
document.getElementById('saveForm57').style.marginTop= randomY();
document.getElementById('saveForm58').style.marginLeft= randomX();
document.getElementById('saveForm58').style.marginTop= randomY();
document.getElementById('saveForm59').style.marginLeft= randomX();
document.getElementById('saveForm59').style.marginTop= randomY();
document.getElementById('saveForm60').style.marginLeft= randomX();
document.getElementById('saveForm60').style.marginTop= randomY();


if (numBugs >= 10){
    document.getElementById('saveForm16').style.display='block';
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    document.getElementById('saveForm19').style.display='block';
    document.getElementById('saveForm20').style.display='block';
    document.getElementById('saveForm21').style.display='block';
    document.getElementById('saveForm22').style.display='block';
    document.getElementById('saveForm23').style.display='block';
    document.getElementById('saveForm24').style.display='block';
    document.getElementById('saveForm25').style.display='block';
    document.getElementById('saveForm51').style.display='block';
    document.getElementById('saveForm52').style.display='block';
    document.getElementById('saveForm53').style.display='block';
    document.getElementById('saveForm54').style.display='block';
    document.getElementById('saveForm55').style.display='block';
    document.getElementById('saveForm56').style.display='block';
    document.getElementById('saveForm57').style.display='block';
    document.getElementById('saveForm58').style.display='block';
    document.getElementById('saveForm59').style.display='block';
    document.getElementById('saveForm60').style.display='block';
    numBugs= numBugs + 20;
    console.log(numBugs);
    document.getElementById("file").value += 55;
    } else if (numBugs >= 6){
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    document.getElementById('saveForm19').style.display='block';
    document.getElementById('saveForm20').style.display='block';
    document.getElementById('saveForm21').style.display='block';
    document.getElementById('saveForm25').style.display='block';
    document.getElementById('saveForm22').style.display='block';
    document.getElementById('saveForm23').style.display='block';
    document.getElementById('saveForm24').style.display='block';
    document.getElementById('saveForm51').style.display='block';
    document.getElementById('saveForm52').style.display='block';
    document.getElementById('saveForm53').style.display='block';
    document.getElementById('saveForm54').style.display='block';
    document.getElementById('saveForm55').style.display='block';
    numBugs= numBugs + 14;
    console.log(numBugs);
    document.getElementById("file").value += 40;
    } else if (numBugs >= 3){
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    document.getElementById('saveForm25').style.display='block';
    document.getElementById('saveForm22').style.display='block';
    document.getElementById('saveForm23').style.display='block';
    document.getElementById('saveForm56').style.display='block';
    document.getElementById('saveForm57').style.display='block';
    document.getElementById('saveForm58').style.display='block';
    document.getElementById('saveForm59').style.display='block';
    document.getElementById('saveForm60').style.display='block';
    numBugs= numBugs + 10;
    console.log(numBugs);
    document.getElementById("file").value += 30;
    } else if (numBugs == 2){
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    document.getElementById('saveForm25').style.display='block';
    document.getElementById('saveForm22').style.display='block';
    document.getElementById('saveForm56').style.display='block';
    document.getElementById('saveForm57').style.display='block';
    document.getElementById('saveForm58').style.display='block';
    document.getElementById('saveForm60').style.display='block';
    numBugs= numBugs + 8;
    console.log(numBugs);
    document.getElementById("file").value += 24;
    } else if (numBugs == 1){
    document.getElementById('saveForm21').style.display='block';
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    document.getElementById('saveForm58').style.display='block';
    numBugs= numBugs + 4;
    console.log(numBugs);
    document.getElementById("file").value += 12;
    } else if (numBugs==0){
    win();
    }
take2=false;
take3=true;
setTimeout(trackNum(), 2500);

var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
    inputs[i].contentEditable = 'true';
}


}

function happen3(){
document.getElementById('saveForm26').style.marginTop= randomY();
document.getElementById('saveForm26').style.marginLeft= randomX();
document.getElementById('saveForm27').style.marginLeft= randomX();
document.getElementById('saveForm27').style.marginTop= randomY();
document.getElementById('saveForm28').style.marginLeft= randomX();
document.getElementById('saveForm28').style.marginTop= randomY();
document.getElementById('saveForm29').style.marginLeft= randomX();
document.getElementById('saveForm29').style.marginTop= randomY();
document.getElementById('saveForm30').style.marginLeft= randomX();
document.getElementById('saveForm30').style.marginTop= randomY();

document.getElementById('saveForm31').style.marginLeft= randomX();
document.getElementById('saveForm31').style.marginTop= randomY();
document.getElementById('saveForm32').style.marginLeft= randomX();
document.getElementById('saveForm32').style.marginTop= randomY();
document.getElementById('saveForm33').style.marginLeft= randomX();
document.getElementById('saveForm33').style.marginTop= randomY();
document.getElementById('saveForm34').style.marginLeft= randomX();
document.getElementById('saveForm34').style.marginTop= randomY();
document.getElementById('saveForm35').style.marginLeft= randomX();
document.getElementById('saveForm35').style.marginTop= randomY();

document.getElementById('saveForm61').style.marginLeft= randomX();
document.getElementById('saveForm61').style.marginTop= randomY();
document.getElementById('saveForm62').style.marginLeft= randomX();
document.getElementById('saveForm62').style.marginTop= randomY();
document.getElementById('saveForm63').style.marginLeft= randomX();
document.getElementById('saveForm63').style.marginTop= randomY();
document.getElementById('saveForm64').style.marginLeft= randomX();
document.getElementById('saveForm64').style.marginTop= randomY();
document.getElementById('saveForm65').style.marginLeft= randomX();
document.getElementById('saveForm65').style.marginTop= randomY();

document.getElementById('saveForm66').style.marginTop= randomY();
document.getElementById('saveForm66').style.marginLeft= randomX();
document.getElementById('saveForm67').style.marginLeft= randomX();
document.getElementById('saveForm67').style.marginTop= randomY();
document.getElementById('saveForm68').style.marginLeft= randomX();
document.getElementById('saveForm68').style.marginTop= randomY();
document.getElementById('saveForm69').style.marginLeft= randomX();
document.getElementById('saveForm69').style.marginTop= randomY();
document.getElementById('saveForm70').style.marginLeft= randomX();
document.getElementById('saveForm70').style.marginTop= randomY();

//document.getElementById('saveForm84').style.marginLeft= randomX();
//document.getElementById('saveForm84').style.marginTop= randomY();
//document.getElementById('saveForm85').style.marginLeft= randomX();
//document.getElementById('saveForm85').style.marginTop= randomY();

if (numBugs>10){
    document.getElementById('saveForm26').style.display='block';
    document.getElementById('saveForm27').style.display='block';
    document.getElementById('saveForm28').style.display='block';
    document.getElementById('saveForm29').style.display='block';
    document.getElementById('saveForm30').style.display='block';
    document.getElementById('saveForm31').style.display='block';
    document.getElementById('saveForm32').style.display='block';
    document.getElementById('saveForm33').style.display='block';
    document.getElementById('saveForm34').style.display='block';
    document.getElementById('saveForm35').style.display='block';
    document.getElementById('saveForm66').style.display='block';
    document.getElementById('saveForm67').style.display='block';
    document.getElementById('saveForm68').style.display='block';
    document.getElementById('saveForm69').style.display='block';
    document.getElementById('saveForm70').style.display='block';
    document.getElementById('saveForm61').style.display='block';
    document.getElementById('saveForm62').style.display='block';
    document.getElementById('saveForm63').style.display='block';
    document.getElementById('saveForm64').style.display='block';
    document.getElementById('saveForm65').style.display='block';
    numBugs= numBugs + 20;
    document.getElementById("file").value += 55;
    console.log(numBugs);
    } else if (numBugs>=5) {
    document.getElementById('saveForm33').style.display='block';
    document.getElementById('saveForm34').style.display='block';
    document.getElementById('saveForm35').style.display='block';
    document.getElementById('saveForm26').style.display='block';
    document.getElementById('saveForm27').style.display='block';
    document.getElementById('saveForm28').style.display='block';
    document.getElementById('saveForm29').style.display='block';
    document.getElementById('saveForm66').style.display='block';
    document.getElementById('saveForm67').style.display='block';
    document.getElementById('saveForm68').style.display='block';
    document.getElementById('saveForm69').style.display='block';
    document.getElementById('saveForm70').style.display='block';
    document.getElementById('saveForm61').style.display='block';
    document.getElementById('saveForm62').style.display='block';
    document.getElementById('saveForm63').style.display='block';
    document.getElementById('saveForm64').style.display='block';
    document.getElementById('saveForm65').style.display='block';
    numBugs= numBugs + 17;
    document.getElementById("file").value += 40;
    console.log(numBugs);
    } else if (numBugs>=2){
    document.getElementById('saveForm66').style.display='block';
    document.getElementById('saveForm67').style.display='block';
    document.getElementById('saveForm68').style.display='block';
    document.getElementById('saveForm69').style.display='block';
    document.getElementById('saveForm70').style.display='block';
    document.getElementById('saveForm61').style.display='block';
    document.getElementById('saveForm62').style.display='block';
    document.getElementById('saveForm63').style.display='block';
    document.getElementById('saveForm64').style.display='block';
    document.getElementById('saveForm65').style.display='block';
    numBugs= numBugs + 10;
    document.getElementById("file").value += 30;
    console.log(numBugs);
    } else if (numBugs==1){
    document.getElementById('saveForm33').style.display='block';
    document.getElementById('saveForm26').style.display='block';
    document.getElementById('saveForm27').style.display='block';
    document.getElementById('saveForm28').style.display='block';
    document.getElementById("file").value += 12;
    numBugs= numBugs + 4;
    console.log(numBugs);
} else if (numBugs==0){
win();
} else if (numBugs>=65){
lose();
}

take3=false;
take4=true;
setTimeout(trackNum(), 2500);

var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
    inputs[i].contentEditable = 'true';
}

}

function happen4(){

document.getElementById('saveForm36').style.marginTop= randomY();
document.getElementById('saveForm36').style.marginLeft= randomX();
document.getElementById('saveForm37').style.marginLeft= randomX();
document.getElementById('saveForm37').style.marginTop= randomY();
document.getElementById('saveForm38').style.marginLeft= randomX();
document.getElementById('saveForm38').style.marginTop= randomY();
document.getElementById('saveForm39').style.marginLeft= randomX();
document.getElementById('saveForm39').style.marginTop= randomY();
document.getElementById('saveForm40').style.marginLeft= randomX();
document.getElementById('saveForm40').style.marginTop= randomY();

document.getElementById('saveForm41').style.marginLeft= randomX();
document.getElementById('saveForm41').style.marginTop= randomY();
document.getElementById('saveForm42').style.marginLeft= randomX();
document.getElementById('saveForm42').style.marginTop= randomY();
document.getElementById('saveForm43').style.marginLeft= randomX();
document.getElementById('saveForm43').style.marginTop= randomY();
document.getElementById('saveForm44').style.marginLeft= randomX();
document.getElementById('saveForm44').style.marginTop= randomY();
document.getElementById('saveForm45').style.marginLeft= randomX();
document.getElementById('saveForm45').style.marginTop= randomY();

document.getElementById('saveForm71').style.marginLeft= randomX();
document.getElementById('saveForm71').style.marginTop= randomY();
document.getElementById('saveForm72').style.marginLeft= randomX();
document.getElementById('saveForm72').style.marginTop= randomY();
document.getElementById('saveForm73').style.marginLeft= randomX();
document.getElementById('saveForm73').style.marginTop= randomY();
document.getElementById('saveForm74').style.marginLeft= randomX();
document.getElementById('saveForm74').style.marginTop= randomY();
document.getElementById('saveForm75').style.marginLeft= randomX();
document.getElementById('saveForm75').style.marginTop= randomY();

document.getElementById('saveForm76').style.marginTop= randomY();
document.getElementById('saveForm76').style.marginLeft= randomX();
document.getElementById('saveForm77').style.marginLeft= randomX();
document.getElementById('saveForm77').style.marginTop= randomY();
document.getElementById('saveForm78').style.marginLeft= randomX();
document.getElementById('saveForm78').style.marginTop= randomY();
document.getElementById('saveForm79').style.marginLeft= randomX();
document.getElementById('saveForm79').style.marginTop= randomY();
document.getElementById('saveForm80').style.marginLeft= randomX();
document.getElementById('saveForm80').style.marginTop= randomY();


 if (numBugs>=10){
    document.getElementById('saveForm36').style.display='block';
    document.getElementById('saveForm37').style.display='block';
    document.getElementById('saveForm38').style.display='block';
    document.getElementById('saveForm39').style.display='block';
    document.getElementById('saveForm40').style.display='block';
    document.getElementById('saveForm41').style.display='block';
    document.getElementById('saveForm42').style.display='block';
    document.getElementById('saveForm43').style.display='block';
    document.getElementById('saveForm44').style.display='block';
    document.getElementById('saveForm45').style.display='block';
    document.getElementById('saveForm76').style.display='block';
    document.getElementById('saveForm77').style.display='block';
    document.getElementById('saveForm78').style.display='block';
    document.getElementById('saveForm79').style.display='block';
    document.getElementById('saveForm80').style.display='block';
    document.getElementById('saveForm71').style.display='block';
    document.getElementById('saveForm72').style.display='block';
    document.getElementById('saveForm73').style.display='block';
    document.getElementById('saveForm74').style.display='block';
    document.getElementById('saveForm75').style.display='block';
    numBugs= numBugs + 20;
    console.log(numBugs);
    document.getElementById("file").value += 25;
 } else if (numBugs>5){
    document.getElementById('saveForm36').style.display='block';
    document.getElementById('saveForm37').style.display='block';
    document.getElementById('saveForm38').style.display='block';
    document.getElementById('saveForm39').style.display='block';
    document.getElementById('saveForm40').style.display='block';
    document.getElementById('saveForm41').style.display='block';
    document.getElementById('saveForm42').style.display='block';
    document.getElementById('saveForm43').style.display='block';
    document.getElementById('saveForm71').style.display='block';
    document.getElementById('saveForm72').style.display='block';
    document.getElementById('saveForm73').style.display='block';
    document.getElementById('saveForm74').style.display='block';
    document.getElementById('saveForm75').style.display='block';
    numBugs= numBugs + 13;
    console.log(numBugs);
    document.getElementById("file").value += 29;
 } else if (numBugs>=2){
    document.getElementById('saveForm36').style.display='block';
    document.getElementById('saveForm37').style.display='block';
    document.getElementById('saveForm38').style.display='block';
    document.getElementById('saveForm39').style.display='block';
    document.getElementById('saveForm40').style.display='block';
    document.getElementById('saveForm71').style.display='block';
    document.getElementById('saveForm72').style.display='block';
    document.getElementById('saveForm73').style.display='block';
    document.getElementById('saveForm74').style.display='block';
    document.getElementById('saveForm75').style.display='block';
    numBugs= numBugs + 10;
    console.log(numBugs);
    document.getElementById("file").value += 20;
 } else if (numBugs==1){
    document.getElementById('saveForm36').style.display='block';
    document.getElementById('saveForm37').style.display='block';
    document.getElementById('saveForm38').style.display='block';
    document.getElementById('saveForm39').style.display='block';
    numBugs= numBugs + 4;
    console.log(numBugs);
    document.getElementById("file").value += 15;
 } else if (numBugs==0){
 win();
 } else if (numBugs>=65) {
lose();
}

take4=false;
take5=true;
setTimeout(trackNum(), 2500);

var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
    inputs[i].contentEditable = 'true';
}

}

function happen5(){
take5=false;
finalTake=true;

if (numBugs>=65) {
lose();
} else if (numBugs==0){
win();
} else {
trackNum();
}

}

function happen6(){

if (numBugs=>1) {

document.getElementById('saveForm91').style.marginLeft= randomX();
document.getElementById('saveForm91').style.marginTop= randomY();
document.getElementById('saveForm92').style.marginLeft= randomX();
document.getElementById('saveForm92').style.marginTop= randomY();
document.getElementById('saveForm93').style.marginLeft= randomX();
document.getElementById('saveForm93').style.marginTop= randomY();
document.getElementById('saveForm94').style.marginLeft= randomX();
document.getElementById('saveForm94').style.marginTop= randomY();
document.getElementById('saveForm95').style.marginLeft= randomX();
document.getElementById('saveForm95').style.marginTop= randomY();

document.getElementById('saveForm96').style.marginTop= randomY();
document.getElementById('saveForm96').style.marginLeft= randomX();
document.getElementById('saveForm97').style.marginLeft= randomX();
document.getElementById('saveForm97').style.marginTop= randomY();
document.getElementById('saveForm98').style.marginLeft= randomX();
document.getElementById('saveForm98').style.marginTop= randomY();
document.getElementById('saveForm99').style.marginLeft= randomX();
document.getElementById('saveForm99').style.marginTop= randomY();
document.getElementById('saveForm100').style.marginLeft= randomX();
document.getElementById('saveForm100').style.marginTop= randomY();

var inputs=document.getElementsByTagName('input');
document.getElementById("file").value = 100;
for(i=0;i<inputs.length;i++){
    inputs[i].style.display='block';
}
 numBugs=100;
timeUp=true;
lose();
} else if (numBugs==0){
win();
}

}

function win(){
gameOngoing=false;
var elem3= document.getElementById("prog");
elem3.parentNode.removeChild(elem3);
var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].style.display='none';
}


credits();


//text that the bugs have been under control
var h = document.createElement("H1");              // Create a <h1> element
var t = document.createTextNode("Congrats!");     // Create a text node
h.appendChild(t);                                   // Append the text to <h1>
document.body.appendChild(h);
var divlose1= document.getElementById('divlose1');
var divlose2= document.getElementById('divlose2');
divlose1.appendChild(h);

var h2 = document.createElement("H2");
var t2 = document.createTextNode("You've Prevented the Population From Getting Out of Control");
var h3 = document.createElement("H3");
var t3 = document.createTextNode("refresh the page to play again");
h2.appendChild(t2);
h3.appendChild(t3);
document.body.appendChild(h2);
document.body.appendChild(h3);
divlose1.appendChild(h2);
divlose2.appendChild(h3);

//organize text nodes
if (mobile==true){
divlose2.style.marginTop= "40%";
divlose2.style.marginLeft="25%";
divlose1.style.marginTop= "0%";
divlose1.style.marginLeft = "2%";
divlose1.style.marginRight = "2%";
} else {
divlose2.style.marginTop= "10%";
divlose2.style.marginLeft="45%";
divlose1.style.marginTop= "0%";
divlose1.style.marginLeft = "30%";
}

//display texts

divlose1.style.color = "green";
divlose1.style.textAlign='center';
divlose2.style.textAlign='center';
divlose1.style.display = "block";
divlose2.style.display = "block";

}

function lose(){
gameOngoing=false;
var elem3= document.getElementById("prog");
elem3.parentNode.removeChild(elem3);

var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].style.display='block';
    inputs[i].disabled=true;
}


credits();
console.log(timeUp);
if (timeUp==false){
//text that the bugs are out of control
var h = document.createElement("H1");              // Create a <h1> element
var t = document.createTextNode("The Population Has Gotten Out of Control");     // Create a text node
h.appendChild(t);                                   // Append the text to <h1>
document.body.appendChild(h);
var divlose1= document.getElementById('divlose1');
divlose1.appendChild(h);

if (mobile==true){
divlose1.style.marginTop= "0%";
divlose1.style.marginLeft = "10%";
divlose1.style.fontSize='10px';

} else {
divlose1.style.fontSize='14px';
divlose1.style.marginTop= "0%";
divlose1.style.marginLeft = "30%";
}

divlose1.style.zIndex = "3";
divlose1.style.color = "red";
divlose1.style.display='block';
}
if (timeUp==true){
//text that the bugs are out of control
var h = document.createElement("H1");              // Create a <h1> element
var t = document.createTextNode("Time's Up!");     // Create a text node
h.appendChild(t);                                   // Append the text to <h1>
document.body.appendChild(h);
var divlose1= document.getElementById('divlose1');
divlose1.appendChild(h);

if (mobile==true){
divlose1.style.marginTop= "0%";
divlose1.style.marginLeft = "40%";
divlose1.style.fontSize='10px';

} else {
divlose1.style.fontSize='14px';
divlose1.style.marginTop= "0%";
divlose1.style.marginLeft = "40%";
}

divlose1.style.zIndex = "3";
divlose1.style.color = "red";
divlose1.style.display='block';
}

var h3 = document.createElement("H3");
var t3 = document.createTextNode("refresh the page to try again");
h3.appendChild(t3);
document.body.appendChild(h3);
divlose2.appendChild(h3);

var divlose4= document.getElementById('divlose4');
var b= document.createElement("H3");
var t4 = document.createTextNode("For more information about the life cycle and growth rate of the spotted lanternfly in the US see: ");
b.appendChild(t4);
document.body.appendChild(b);
divlose4.appendChild(b);

var t5= document.createTextNode("Strömbom and Pandey. 2021. Modeling the life cycle of the spotted lanternfly (Lycorma delicatula) with management implications. Mathematical Biosciences, Volume 340, 108670.")
b.appendChild(t5);
document.body.appendChild(b);
divlose4.appendChild(b);

divlose4.style.color='white';
divlose4.style.display='block';

////////////paid article//////////////

   var t8= document.createTextNode("Official published article:");
      divlose4.appendChild(t8);
      divlose4.style.color='white';

var r = document.createElement('a');
var linkText1 = document.createTextNode("https://doi.org/10.1016/j.mbs.2021.108670");
      r.appendChild(linkText1);
      r.style.color='white';
      r.title = "StrombomPandey2021preprint";
      r.href = "https://doi.org/10.1016/j.mbs.2021.108670";
      document.body.appendChild(r);
     var divlose4= document.getElementById('divlose4');
      divlose4.appendChild(r);

   var t7= document.createTextNode("(requires subscription)");
      divlose4.appendChild(t7);
      divlose4.style.color='white';





////////////free article//////////////
var a = document.createElement('a');

var linkText = document.createTextNode("Preprint Here");
      a.appendChild(linkText);

      a.style.color='white';
      a.title = "StrombomPandey2021preprint";
      a.href = "https://drive.google.com/file/d/1EJUm6SE-i3y54pdI7ta9YcdnXme5_4Ld/view?usp=sharing";
      document.body.appendChild(a);
     var divlose3= document.getElementById('divlose3');
      divlose3.appendChild(a);

   var t6= document.createTextNode("(free)");
      divlose3.appendChild(t6);
      divlose3.style.color='white';

////////organized textnodes///////////////
if (mobile==true){
divlose2.style.marginTop= "12%";
divlose2.style.marginLeft="35%";
divlose2.style.fontSize='x-small';

divlose3.style.marginTop="50%";
divlose3.style.marginLeft="35%";
divlose3.style.fontSize='small';

divlose4.style.marginLeft='0%';
divlose4.style.marginTop='19%';
divlose4.style.marginRight='0%';
divlose4.style.fontSize='9px';


} else if (window.innerWidth > 900) {
divlose2.style.marginTop= "5%";
divlose2.style.marginLeft="40%";

divlose3.style.marginTop="50%";
divlose3.style.marginLeft="30%";
divlose3.style.marginRight="30%";
divlose3.style.fontSize='x-large';

divlose4.style.marginLeft='0%';
divlose4.style.marginTop='40%';
console.log(innerWidth);
}else if(window.innerWidth <=900) {
divlose2.style.marginTop= "5%";
divlose2.style.marginLeft="40%";

divlose3.style.marginTop="70%";
divlose3.style.marginLeft="30%";
divlose3.style.marginRight="30%";
divlose3.style.fontSize='x-large';

divlose4.style.marginLeft='0%';
divlose4.style.marginTop='55%';

}


//display ending texts


divlose2.style.zIndex = "3";
divlose3.style.zIndex = "3";
divlose2.style.display='block';
divlose3.style.display='block';
document.getElementById('bigBug').style.display='block';


}

function credits(){

    var logo= document.getElementById('logo');

if(mobile==true){
logo.style.marginTop="100%";
} else if (window.innerWidth <= 900){
logo.style.marginTop="40%";
} else if (window.innerWidth > 900) {
logo.style.marginTop="20%";
}

logo.style.display="block";



}




//get random X values for images
function randomX(){
if (mobile==true){
	  var randomX = Math.floor(Math.random()*(window.screen.availWidth-(window.innerWidth/6)));
} else {
var randomX = Math.floor(Math.random()*(window.innerWidth-(window.innerWidth/6)));
}
return randomX;

}

//get random Y values for images
function randomY(){
if (mobile==true){
	  var randomY = Math.floor(Math.random()*((window.screen.availHeight-(window.innerHeight/3))));
} else{
	  var randomY = Math.floor(Math.random()*(window.innerHeight-(window.innerHeight/6)));
	  }
    return randomY;
}

//on clicks, get image and make it disappear; subtract one bug and remove some proportion of bugs
function doThing1(){
   document.getElementById('saveForm1').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing2(){
   document.getElementById('saveForm2').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing3(){
   document.getElementById('saveForm3').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing4(){
   document.getElementById('saveForm4').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing5(){
   document.getElementById('saveForm5').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing6(){
   document.getElementById('saveForm6').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing7(){
   document.getElementById('saveForm7').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing8(){
   document.getElementById('saveForm8').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing9(){
   document.getElementById('saveForm9').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing10(){
   document.getElementById('saveForm10').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing11(){
   document.getElementById('saveForm11').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing12(){
   document.getElementById('saveForm12').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing13(){
   document.getElementById('saveForm13').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing14(){
   document.getElementById('saveForm14').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing15(){
   document.getElementById('saveForm15').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing16(){
   document.getElementById('saveForm16').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing17(){
   document.getElementById('saveForm17').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing18(){
   document.getElementById('saveForm18').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing19(){
   document.getElementById('saveForm19').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing20(){
   document.getElementById('saveForm20').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing21(){
   document.getElementById('saveForm21').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing22(){
   document.getElementById('saveForm22').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing23(){
   document.getElementById('saveForm23').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing24(){
   document.getElementById('saveForm24').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing25(){
   document.getElementById('saveForm25').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing26(){
   document.getElementById('saveForm26').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing27(){
   document.getElementById('saveForm27').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing28(){
   document.getElementById('saveForm28').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing29(){
   document.getElementById('saveForm29').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing30(){
   document.getElementById('saveForm30').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing31(){
   document.getElementById('saveForm31').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing32(){
   document.getElementById('saveForm32').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing33(){
   document.getElementById('saveForm33').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing34(){
   document.getElementById('saveForm34').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing35(){
   document.getElementById('saveForm35').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing36(){
   document.getElementById('saveForm36').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing37(){
   document.getElementById('saveForm37').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing38(){
   document.getElementById('saveForm38').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing39(){
   document.getElementById('saveForm39').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing40(){
   document.getElementById('saveForm40').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing41(){
   document.getElementById('saveForm41').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing42(){
   document.getElementById('saveForm42').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing43(){
   document.getElementById('saveForm43').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing44(){
   document.getElementById('saveForm44').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing45(){
   document.getElementById('saveForm45').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing46(){
   document.getElementById('saveForm46').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing47(){
   document.getElementById('saveForm47').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing48(){
   document.getElementById('saveForm48').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing49(){
   document.getElementById('saveForm49').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing50(){
   document.getElementById('saveForm50').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing51(){
   document.getElementById('saveForm51').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing52(){
   document.getElementById('saveForm52').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing53(){
   document.getElementById('saveForm53').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing54(){
   document.getElementById('saveForm54').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing55(){
   document.getElementById('saveForm55').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing56(){
   document.getElementById('saveForm56').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing57(){
   document.getElementById('saveForm57').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing58(){
   document.getElementById('saveForm58').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing59(){
   document.getElementById('saveForm59').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing60(){
   document.getElementById('saveForm60').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing61(){
   document.getElementById('saveForm61').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing62(){
   document.getElementById('saveForm62').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing63(){
   document.getElementById('saveForm63').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing64(){
   document.getElementById('saveForm64').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing65(){
   document.getElementById('saveForm65').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing66(){
   document.getElementById('saveForm66').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing67(){
   document.getElementById('saveForm67').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing68(){
   document.getElementById('saveForm68').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing69(){
   document.getElementById('saveForm69').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing70(){
   document.getElementById('saveForm70').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing71(){
   document.getElementById('saveForm71').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing72(){
   document.getElementById('saveForm72').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing73(){
   document.getElementById('saveForm73').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing74(){
   document.getElementById('saveForm74').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing75(){
   document.getElementById('saveForm75').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing76(){
   document.getElementById('saveForm76').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing77(){
   document.getElementById('saveForm77').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing78(){
   document.getElementById('saveForm78').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing79(){
   document.getElementById('saveForm79').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 2;
}

function doThing80(){
   document.getElementById('saveForm80').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing81(){
   document.getElementById('saveForm81').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing82(){
   document.getElementById('saveForm82').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing83(){
   document.getElementById('saveForm83').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing84(){
   document.getElementById('saveForm84').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing85(){
   document.getElementById('saveForm85').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing91(){
   document.getElementById('saveForm91').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing92(){
   document.getElementById('saveForm92').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing93(){
   document.getElementById('saveForm93').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing94(){
   document.getElementById('saveForm94').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing95(){
   document.getElementById('saveForm95').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing96(){
   document.getElementById('saveForm96').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing97(){
   document.getElementById('saveForm97').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing98(){
   document.getElementById('saveForm98').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing99(){
   document.getElementById('saveForm99').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}

function doThing100(){
   document.getElementById('saveForm100').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}