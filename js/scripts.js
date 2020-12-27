// Start the slider with a random image every time the page is refreshed
var num = Math.floor(Math.random() * 8);

$('.carousel').carousel(num)
$('.carousel').carousel({
    interval: 2000
  })


// search
// ------

// mark.js instance
var instance = new Mark(document.querySelector("body"));

// keyword variable
var keyword;

// get input from user
function getKeyword(){
 keyword = document.querySelector(".userInpt").value;

// exectue PerformanceMark.js
instance.unmark();
instance.mark(keyword);
}

// search button
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", getKeyword);




// read more
// -----------------------


// read more div1
const readMoreDiv1 = document.querySelector(".read-more-div1");

// read more function
function readMore(dots, more, btn){
  if (dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    more.style.display = "none";
  } 
  else{
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    more.style.display = "inline";
  }
}

// article 1
// dots ...
const dots1 = document.querySelector('#dots1');
// more text
const more1 = document.querySelector('#more1');
// read more button
const readMoreBtn1 = document.querySelector(".btn1");

// article 2
// dots ...
const dots2 = document.querySelector('#dots2');
// more text
const more2 = document.querySelector('#more2');
// read more button
const readMoreBtn2 = document.querySelector(".btn2");

// article 3
// dots ...
const dots3 = document.querySelector('#dots3');
// more text
const more3 = document.querySelector('#more3');
// read more button
const readMoreBtn3 = document.querySelector(".btn3");

// article 4
// dots ...
const dots4 = document.querySelector('#dots4');
// more text
const more4 = document.querySelector('#more4');
// read more button
const readMoreBtn4 = document.querySelector(".btn4");

// article 5
// dots ...
const dots5 = document.querySelector('#dots5');
// more text
const more5 = document.querySelector('#more5');
// read more button
const readMoreBtn5 = document.querySelector(".btn5");

// article 6
// dots ...
const dots6 = document.querySelector('#dots6');
// more text
const more6 = document.querySelector('#more6');
// read more button
const readMoreBtn6 = document.querySelector(".btn6");

// article 7
// dots ...
const dots7 = document.querySelector('#dots7');
// more text
const more7 = document.querySelector('#more7');
// read more button
const readMoreBtn7 = document.querySelector(".btn7");

// article 8
// dots ...
const dots8 = document.querySelector('#dots8');
// more text
const more8 = document.querySelector('#more8');
// read more button
const readMoreBtn8 = document.querySelector(".btn8");

// article 9
// dots ...
const dots9 = document.querySelector('#dots9');
// more text
const more9 = document.querySelector('#more9');
// read more button
const readMoreBtn9 = document.querySelector(".btn9");

// article 10
// dots ...
const dots10 = document.querySelector('#dots10');
// more text
const more10 = document.querySelector('#more10');
// read more button
const readMoreBtn10 = document.querySelector(".btn10");

// article 11
// dots ...
const dots11 = document.querySelector('#dots11');
// more text
const more11 = document.querySelector('#more11');
// read more button
const readMoreBtn11 = document.querySelector(".btn11");

// article 12
// dots ...
const dots12 = document.querySelector('#dots12');
// more text
const more12 = document.querySelector('#more12');
// read more button
const readMoreBtn12 = document.querySelector(".btn12");

// article 13
// dots ...
const dots13 = document.querySelector('#dots13');
// more text
const more13 = document.querySelector('#more13');
// read more button
const readMoreBtn13 = document.querySelector(".btn13");

// article 14
// dots ...
const dots14 = document.querySelector('#dots14');
// more text
const more14 = document.querySelector('#more14');
// read more button
const readMoreBtn14 = document.querySelector(".btn14");


// pagination
// ----------

// current page indicator
const currentPage = document.querySelector('#currentPage');
// currentPage.innerHTML = "1 ";

// total number of pages
const totalPages = document.querySelector('#totalPages');
totalPages.innerHTML = "5";

// links to pages
// --------------

const page1 = document.querySelector('.p1');

const page2 = document.querySelector('.p2');

const page3 = document.querySelector('.p3');

const page4 = document.querySelector('.p4');

const page5 = document.querySelector('.p5');

// pages array
var pages = [page1,page2,page3,page4,page5];

// check the current page

// page number
var n = 1;

// loop through every page
pages.forEach((x)=>{
  
  if($(x).hasClass("disabled")){
    
    // change current page
    currentPage.innerHTML = n;
  }
  ++n;
});



