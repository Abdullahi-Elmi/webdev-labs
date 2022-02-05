const changeSize = (size) => {
   content = document.querySelector("p");
   contentSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
   content.style.fontSize = (contentSize + size) + 'px';

   header = document.querySelector("h1");
   headerSize = parseFloat(window.getComputedStyle(header, null).getPropertyValue('font-size'));
   header.style.fontSize = (headerSize + size) + 'px';
   /* Initially, my buttons would only increase/decrease the size once, and nothing else, after searching online I followed this method
      from: https://stackoverflow.com/questions/38627822/increase-the-font-size-with-a-click-of-a-button-using-only-javascript
      didn't know if it was necessary, but wanted to cite just in case */
}

const makeBigger = () => {
   //document.querySelector("p").style.fontSize = "110%";
   changeSize(7);
};

const makeSmaller = () => {
   //alert('make bigger!');, alert('make smaller!');
   changeSize(-7);
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);