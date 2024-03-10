addCss('../css/yes-no.css');  // css per file




document.querySelector(".root").innerHTML =
    `<header>
<h1>ASK ANUTHING</h1>
<h2>Yes/No</h2>
<input placeholder="Your question">
</header>
<main></main>`
const input = document.querySelector("input")
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value && input.value[input.value.length - 1] === "?") {
        getAnsJq(log, "https://yesno.wtf/api")
    }
    else if (e.key === "Enter" && input.value) {
        document.querySelector("h1").innerText = "It's not question!"
        setTimeout(() => { document.querySelector("h1").innerText = 'ASK ANUTHING' }, 2000)
    }
})





function log(ans) {
    console.log(ans)
    document.querySelector("header").style.height = "170px"
    document.querySelector("main").innerHTML =
        `<h1 class>${ans.answer}!</h1>
    <img src="${ans.image}" />
    `

}

