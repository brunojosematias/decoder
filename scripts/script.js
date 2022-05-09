function encrypt() {
  let input = document.querySelector("input");
  input.focus();
  let cryptography = document.querySelector(".cryptography");
  let valueInput = input.value;
  let conversion;

  caracters = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
  }


  conversion = valueInput.replace(/a|e|i|o|u/gi, function(matched){
    return caracters[matched];
  })

  cryptography.innerHTML = `<h2 style="margin: 16px 8px 0"> ${conversion} <h2>`;
  
  input.value = "";
}


function decrypt() {
  let input = document.querySelector("input");
  let cryptography = document.querySelector(".cryptography");
  let valueInput = input.value;
  let conversion; 
  
  caracters = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
  }
  
  conversion = valueInput.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
    return caracters[matched];
  })

  cryptography.innerHTML = `<h2 style="margin: 16px 8px 0"> ${conversion} <h2>`;

  input.value = "";
}