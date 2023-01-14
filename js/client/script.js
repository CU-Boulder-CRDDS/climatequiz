var clicked = false;
const open_url = "./img/open.png";
const close_url = "./img/close.png";

let agreeCalculation = 0.00;
let disagreeCalculation = 0.00;

let page;

let choice1 = false;
let choice2 = false;

this.endpoint = 'http://ec2-52-39-147-47.us-west-2.compute.amazonaws.com:3000';

/*
function displayCredits() {
  credits = document.getElementById("credits").style.display = "block";
}
*/

if (document.URL.includes("q1") ) {
  page = 0;
}
else if (document.URL.includes("q2") ) {
  page = 1;
}
else if (document.URL.includes("q3") ) {
  page = 2;
}
else if (document.URL.includes("q4") ) {
  page = 3;
}
else if (document.URL.includes("q5") ) {
  page = 4;
}
else if (document.URL.includes("q6") ) {
  page = 5;
}
else if (document.URL.includes("q7") ) {
  page = 6;
}

console.log('Page '+ page);

function changeImage1() {
  changeImage1 = function(){}; // kill it as soon as it was called
  changeImage2 = function(){}; // kill it as soon as it was called
  var img_obj = document.getElementById("img-1");
  choice1 = true;
  
  if (!clicked) {
    clicked = true;
    // do something
  
    img_obj.src = open_url;
    clicked = true;
    document.getElementById("img-1").src = close_url;
    document.getElementById("img-top").src = close_url;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").style.textAlign='center';
    //document.getElementById("result").style.justifyContent = 'center';
  }
  this._refresh();
  
  // let yesValue = data.q1.Yes + 1;
}



function changeImage2() {
  changeImage2 = function(){}; // kill it as soon as it was called
  changeImage1 = function(){}; // kill it as soon as it was called
  var img_obj = document.getElementById("img-2");
  choice2 = true;

  if (!clicked) {
    clicked = true;
    // do something
  
    img_obj.src = open_url;
    clicked = true;
    document.getElementById("img-1").src = close_url;
    document.getElementById("img-top").src = close_url;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").style.textAlign='center';
    //document.getElementById("result").style.justifyContent = 'center';
  }

  this._refresh();

}

async function _refresh() {
  //const response = await fetch(this.endpoint);
  //const data = await response.json();

  const data = [{"id":1,"qyes":34,"qno":64},{"id":2,"qyes":37,"qno":58},{"id":3,"qyes":35,"qno":61},{"id":4,"qyes":33,"qno":56},{"id":5,"qyes":14,"qno":70},{"id":6,"qyes":22,"qno":58},{"id":7,"qyes":29,"qno":46}]

  console.log(data);

  let totalValue = (data[page]["qyes"]+data[page]["qno"]);
  console.log(totalValue);

  if (choice1 === true) {
    agreeCalculation = 100 * ( (data[page]["qyes"])/(data[page]["qyes"] + data[page]["qno"]));
    disagreeCalculation = (100 - agreeCalculation);

    let yesValue = data[page]["qyes"] + 1;
    console.log(yesValue);
  
    document.getElementById("total").innerText = `${ totalValue }`;
    document.getElementById("agree").innerText = `${ agreeCalculation.toFixed(1) }`;
    document.getElementById("disagree").innerText = `${ disagreeCalculation.toFixed(1) }`;
    
    page = page + 1;
  }

  else if (choice2 === true) {
    agreeCalculation = (100 * (data[page]["qno"])/(data[page]["qyes"] + data[page]["qno"]));
    disagreeCalculation = (100 - agreeCalculation);
  
    document.getElementById("total").innerText = `${ totalValue }`;
    document.getElementById("agree").innerText = `${ agreeCalculation.toFixed(1) }`;
    document.getElementById("disagree").innerText = `${ disagreeCalculation.toFixed(1) }`;

    let noValue = data[page]["qno"] + 1;
    console.log(noValue);

    page = page + 1;
  }

}

/* async function pushData() {
  if (!this.selected) {
    if (choice1 === true) {
        console.log("yes");
            fetch(this.endpoint, {
                method: "post",
                mode: 'cors',
                body: 
                  `question=${ page }&answer=yes`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
            })
          }
     else if (choice2 === true) {
        console.log("no");
        fetch(this.endpoint, {
            method: "post",
            mode: 'cors',
            body: `question=${ page }&answer=no`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }
}
}*/