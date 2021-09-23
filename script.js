const colors = document.getElementById("color");
const btn = document.getElementById("btn");
let clip = document.getElementById("clip");
let sec = document.getElementById("sec");
let rgbVal = document.getElementById("rgb");
let hslVal = document.getElementById("hsl");
let hsvVal = document.getElementById("hsv");
let names = document.getElementById("name");

const colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", function (e) {
  let hex = "#";
  let sample = ''
  let main =''

  for (let i = 0; i < 6; i++) {
    main += colorCode[random()];
   
  }

  hex += main
  sample = main

  colors.innerHTML = hex;
  sec.style.background = `${hex}`;

  let fetchSome = new fetchApi

      
  fetchSome.getCode(sample)

colors.innerHTML = hex;
sec.style.background = `${hex}`;





  clip.setAttribute("data-clipboard-text", hex);
});

window.addEventListener("keyup", function (e) {
  if (e.keyCode == 32 || e.keyCode == 13) {
    let hex = "#";
    let sample = ''
    let main =''

    for (let i = 0; i < 6; i++) {
      main += colorCode[random()];

      
      
    }

    hex += main
      sample += main

    

      let fetchSome = new fetchApi

      
      fetchSome.getCode(sample)

    colors.innerHTML = hex;
    sec.style.background = `${hex}`;
    clip.setAttribute("data-clipboard-text", hex);
  }
});

function random() {
  return Math.floor(Math.random() * colorCode.length);
}


class fetchApi{
    getCode = async function(url){

        try {

            let response = await fetch(`https://www.thecolorapi.com/id?hex=${url}`)
            let data = await response.json()
            
            let {rgb , hsv , hsl , image , name}  = data
            names.innerHTML = name.value
            hslVal.innerHTML = hsl.value
            rgbVal.innerHTML = rgb.value
            hsvVal.innerHTML = hsv.value

            
            
        } catch (error) {
            
            alert('Something went wrong try again later')
        }
    }
}



