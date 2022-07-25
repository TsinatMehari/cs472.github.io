function biggerDecoration() {
    let decorateText = document.getElementById("decorate-text");
    let style = window.getComputedStyle(decorateText, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style);
    decorateText.style.fontSize = (fontSize+2).toString() +'pt';
     setInterval(biggerDecoration, 2000)
  }
  
  function bling() {
    let decorateText = document.getElementById("decorate-text");
    if (document.getElementById('decorate-bling').checked) {
        decorateText.style.color = "green";
        decorateText.style.textDecoration = "underline"
        document.body.style.backgroundImage = "url('https://smuckersales.com/wp-content/uploads/2016/06/Body-Background-1.jpg')";
    } else {
        decorateText.style.color = "black";
        decorateText.style.textDecoration = "none"
        document.body.style.backgroundImage = "none";
    }
  }
  function xaxe()
  {
    if( document.getElementById("decorate-text").value.length>=5)
  
    document.getElementById("decorate-text").value = "Malkovitch";
  }
  
    function tsinat() {
     let str= document.getElementById("decorate-text").value;
      const arr = str.split(' ');
      document.getElementById("decorate-text").value= arr.map((word) => {
          return word.match(/[A-z]/i) ?
              `${word.substr(1)}${word.substr(0,1)}ay` : word
      }).join(' ');
  }