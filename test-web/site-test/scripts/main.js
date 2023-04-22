let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/redaction-web.jpg') {
      myImage.setAttribute('src', 'images/redaction-web2.jpg');
    } else {
      myImage.setAttribute('src', 'images/redaction-web.jpg');
    }
});
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Andao hianatra rédaction Web SEO, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Andao hianatra rédaction web SEO, ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });
