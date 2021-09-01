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



var inputs=document.getElementsByTagName('input');
for(i=0;i<inputs.length;i++){
    inputs[i].disabled=false;
}

draw();



function draw(){
  //waiting for the first click
if (eas==true || mediu==true || har==true){


waitToStart();
}




if (numBugs==0){
win();
} if (numBugs>=35){
lose();
}

//if (startGame==false && gameOngoing==true){
//var elem= document.getElementById("welcome");
////elem.style.display='block';
//}
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
startGame=true;
var elem2= document.getElementById("canvas");
elem2.parentNode.removeChild(elem2);
//call to load initial 5 images after DOM loads


initImgs();
    var img = document.createElement("img");
    img.src = "https://lh3.googleusercontent.com/pw/AM-JKLWF3IRRV3Xgv2uywUMwHbZN_8iYrSFtoXMH2zQreuiQJrvdALwQtjfyZgPVp4Qua-q_IDGRXibH9N2ZvhHjwH1aGV4C49EwYLUqNxGPCEMOkmw3CmXcsdkd3l7kiu0FlKMAs-Eh9h2VvnHJrkZ2HuS3=w1354-h1230-no?authuser=0";
    img.width = window.innerWidth;
    img.height = window.innerHeight;
    img.zIndex=0;

    // Add it to the <body> tag
    var contain= document.getElementById('contain');
    document.body.appendChild(img);
    contain.appendChild(img);
  // document.appendChild(img);


}

function initImgs(){

//position initial images randomly
document.getElementById('saveForm1').style.marginLeft= randomX();
document.getElementById('saveForm1').style.marginLeft= randomY();
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
setTimeout(loadDelayed(), 1000);

}

//load delayed images
function loadDelayed(){
if (startGame==true && take1==true) {

if (eas==true){
setTimeout(happen1, 3000);
}
if (mediu==true){
setTimeout(happen1, 2500);
}
if (har==true){
setTimeout(happen1, 1500);
}

}

}

function trackNum(){

if (eas==true){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=35){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 4500);
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

if (mediu==true){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=35){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 2500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 2000);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 1800);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 2800);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 50);
console.log(numBugs);
}
}

if (har==true){
if (startGame==true && numBugs==0 && finalTake==false){
win();
gameOngoing=false;
} else if (numBugs>=35){
lose();
} else if (startGame==true && take1==false && take2==true && gameOngoing==true) {
setTimeout(happen2, 1500);
} else if (startGame==true && take2==false && take3==true && gameOngoing==true){
setTimeout(happen3, 1700);
} else if (startGame==true && take2==false && take3==false && take4==true && gameOngoing==true){
setTimeout(happen4, 1800);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==true && gameOngoing==true){
setTimeout(happen5, 2000);
} else if (startGame==true && take2==false && take3==false && take4==false && take5==false && finalTake==true && gameOngoing==true){
setTimeout(happen6, 500);
console.log(numBugs);
}
}

}

function happen1(){

document.getElementById('saveForm6').style.marginTop= randomY();
document.getElementById('saveForm6').style.marginLeft= randomY();
document.getElementById('saveForm7').style.marginLeft= randomX();
document.getElementById('saveForm7').style.marginTop= randomY();
document.getElementById('saveForm8').style.marginLeft= randomX();
document.getElementById('saveForm8').style.marginTop= randomY();
document.getElementById('saveForm9').style.marginLeft= randomX();
document.getElementById('saveForm9').style.marginTop= randomY();
document.getElementById('saveForm10').style.marginLeft= randomX();
document.getElementById('saveForm10').style.marginTop= randomY();

document.getElementById('saveForm11').style.marginTop= randomY();
document.getElementById('saveForm11').style.marginLeft= randomY();
document.getElementById('saveForm12').style.marginLeft= randomX();
document.getElementById('saveForm12').style.marginTop= randomY();
document.getElementById('saveForm13').style.marginLeft= randomX();
document.getElementById('saveForm13').style.marginTop= randomY();
document.getElementById('saveForm14').style.marginLeft= randomX();
document.getElementById('saveForm14').style.marginTop= randomY();
document.getElementById('saveForm15').style.marginLeft= randomX();
document.getElementById('saveForm15').style.marginTop= randomY();


if (numBugs == 5){
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
    numBugs= numBugs + 10;
    console.log(numBugs);
    document.getElementById("file").value += 25;
    } else if (numBugs == 4){
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm12').style.display='block';
    document.getElementById('saveForm13').style.display='block';
    document.getElementById('saveForm6').style.display='block';
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm9').style.display='block';
    document.getElementById('saveForm14').style.display='block';
    numBugs= numBugs + 8;
    console.log(numBugs);
    document.getElementById("file").value += 20;
    } else if (numBugs == 3){
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm9').style.display='block';
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm12').style.display='block';
    document.getElementById('saveForm13').style.display='block';
    numBugs=numBugs;
    numBugs= numBugs + 6;
    console.log(numBugs);
    document.getElementById("file").value += 10;
    } else if (numBugs == 2){
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm12').style.display='block';
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    numBugs=numBugs;
    numBugs= numBugs + 4;
    console.log(numBugs);
    document.getElementById("file").value += 5;
    } else if (numBugs == 1){
    document.getElementById('saveForm15').style.display='block';
    document.getElementById('saveForm7').style.display='block';
    document.getElementById('saveForm8').style.display='block';
    document.getElementById('saveForm9').style.display='block';
    numBugs=numBugs;
    numBugs= numBugs + 4;
    console.log(numBugs);
    document.getElementById("file").value += 5;
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
document.getElementById('saveForm16').style.marginLeft= randomY();
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
    numBugs= numBugs + 10;
    console.log(numBugs);
    document.getElementById("file").value += 20;
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
    numBugs= numBugs + 9;
    console.log(numBugs);
    document.getElementById("file").value += 15;
    } else if (numBugs >= 3){
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    document.getElementById('saveForm25').style.display='block';
    document.getElementById('saveForm22').style.display='block';
    document.getElementById('saveForm23').style.display='block';
    numBugs= numBugs + 5;
    console.log(numBugs);
    document.getElementById("file").value += 15;
    } else if (numBugs == 2){
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    document.getElementById('saveForm25').style.display='block';
    document.getElementById('saveForm22').style.display='block';
    numBugs= numBugs + 4;
    console.log(numBugs);
    document.getElementById("file").value += 12;
    } else if (numBugs == 1){
    document.getElementById('saveForm21').style.display='block';
    document.getElementById('saveForm17').style.display='block';
    document.getElementById('saveForm18').style.display='block';
    numBugs= numBugs + 3;
    console.log(numBugs);
    document.getElementById("file").value += 10;
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
    numBugs= numBugs + 10;
    document.getElementById("file").value += 25;
    console.log(numBugs);
    } else if (numBugs>=5) {
    document.getElementById('saveForm33').style.display='block';
    document.getElementById('saveForm34').style.display='block';
    document.getElementById('saveForm35').style.display='block';
    document.getElementById('saveForm26').style.display='block';
    document.getElementById('saveForm27').style.display='block';
    document.getElementById('saveForm28').style.display='block';
    document.getElementById('saveForm29').style.display='block';
    numBugs= numBugs + 7;
    document.getElementById("file").value += 17;
    console.log(numBugs);
    } else if (numBugs>0){
    document.getElementById('saveForm33').style.display='block';
    document.getElementById('saveForm26').style.display='block';
    document.getElementById('saveForm27').style.display='block';
    document.getElementById('saveForm28').style.display='block';
    document.getElementById("file").value += 18;
    numBugs= numBugs + 4;
    console.log(numBugs);
} else if (numBugs==0){
win();
} else if (numBugs>=35){
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
document.getElementById('saveForm36').style.marginLeft= randomY();
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
    numBugs= numBugs + 10;
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
    numBugs= numBugs + 8;
    console.log(numBugs);
    document.getElementById("file").value += 18;
 } else if (numBugs>0){
    document.getElementById('saveForm36').style.display='block';
    document.getElementById('saveForm37').style.display='block';
    document.getElementById('saveForm38').style.display='block';
    document.getElementById('saveForm39').style.display='block';
    document.getElementById('saveForm40').style.display='block';
    numBugs= numBugs + 5;
    console.log(numBugs);
    document.getElementById("file").value += 15;
 } else if (numBugs==0){
 win();
 } else if (numBugs>=35) {
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

if (numBugs>=35) {
lose();
} else if (numBugs==0){
win();
} else {
trackNum();
}

}

function happen6(){

if (numBugs=>1) {
var inputs=document.getElementsByTagName('input');
document.getElementById("file").value = 100;
for(i=0;i<inputs.length;i++){
    inputs[i].style.display='block';
    numBugs=50;
var h1 = document.createElement("H1");              // Create a <h1> element
var t1 = document.createTextNode("Time's Up!");     // Create a text node
h1.appendChild(t1);                                   // Append the text to <h1>
document.body.appendChild(h1);
var divlose1= document.getElementById('divlose1');
divlose1.style.color = "red";
//divlose1.style.textAlign='center';
//divlose1.style.top = "50%";
divlose1.appendChild(h1);
divlose1.style.display = "block";

lose();
}
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

if (window.screen.width <= 400 && window.screen.height <= 820){
divlose2.style.marginTop= "50%";
divlose2.style.marginLeft="35%";
divlose1.style.marginTop= "30%";
divlose1.style.marginLeft = "10%";
} else {
divlose2.style.marginTop= "25%";
divlose2.style.marginLeft="45%";
divlose1.style.marginTop= "10%";
divlose1.style.marginLeft = "25%";
}

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

//text that the bugs are out of control
var h = document.createElement("H1");              // Create a <h1> element
var t = document.createTextNode("the population has gotten out of control");     // Create a text node
h.appendChild(t);                                   // Append the text to <h1>
document.body.appendChild(h);
var divlose1= document.getElementById('divlose1');
divlose1.appendChild(h);


var h3 = document.createElement("H3");
var t3 = document.createTextNode("refresh the page to try again");
h3.appendChild(t3);
document.body.appendChild(h3);
divlose2.appendChild(h3);

if (window.screen.width <= 400 && window.screen.height <= 820){
divlose2.style.marginTop= "50%";
divlose2.style.marginLeft="35%";
divlose1.style.marginTop= "35%";
divlose1.style.marginLeft = "20%";
} else {
divlose2.style.marginTop= "15%";
divlose2.style.marginLeft="35%";
divlose1.style.marginTop= "10%";
divlose1.style.marginLeft = "25%";
}


divlose1.style.zIndex = "3";
divlose1.style.color = "red";
divlose2.style.zIndex = "3";
divlose1.style.display='block';
divlose2.style.display='block';
document.getElementById('bigBug').style.display='block';


}

//get random X values for images
function randomX(){
if (window.screen.width <= 400 && window.screen.height <= 820){
	  var randomX = Math.floor(Math.random()*(window.screen.availWidth));
} else {
 var bugTest= document.getElementById('saveForm1');
var randomX = Math.floor(Math.random()*(window.innerWidth-(bugTest.width*2)));
}
return randomX;

}

//get random Y values for images
function randomY(){
if (window.screen.width <= 400 && window.screen.height <= 820){
      var bugTest= document.getElementById('saveForm1');
	  var randomY = Math.floor(Math.random()*((window.screen.availHeight*2)-bugTest.height));

} else{
      var bugTest= document.getElementById('saveForm1');
	  var randomY = Math.floor(Math.random()*(window.innerHeight-(bugTest.width*2)));
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
   document.getElementById("file").value -= 2;
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
   document.getElementById("file").value -= 2;
}

function doThing50(){
   document.getElementById('saveForm50').style.display='none';
   numBugs--;
   console.log(numBugs);
   document.getElementById("file").value -= 3;
}
