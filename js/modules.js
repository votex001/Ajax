function addCss(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}


function addJS(fileName) {
  var body = document.body;
  var script = document.createElement("script")

  script.src = fileName;

  body.appendChild(script);
}


function getAns(onSucces, url) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const ans = JSON.parse(xhr.responseText)
      onSucces(ans)
    }
  }
  xhr.open('GET', url, true)
  xhr.send()
}

function getAnsJq(onSucces, url) {
  $.get(url, onSucces)
}


// const lol = ()=>{console.log("lol")}


// function repeat(func, times) {
//   for (x = 0; x < times; x++) {
//     func()
//   }
// }




// repeat(lol,6)

// https://pokeapi.co/api/v2/pokemon/1025/