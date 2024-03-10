addCss('../css/address-book.css');  // css per file
getAns(render, "http://www.filltext.com/?rows=6&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true")


function render(ans) {
    const html = ans.map(x => {

        return `
        <section>
            <div class="header"><p>${x.fname},${x.lname}</p></div>
            <img src="https://robohash.org/${x.fname}?set=set1" />
            <div class="info">
                <p>Phone:</p>
                <p>City:</p>
                <p>State:</p>
                <p>Zip:</p>
                <p>Address:</p>
            </div>
            <div class="layout-info">
                <p>${x.tel}</p>
                <p>${x.city}</p>
                <p>${x.state}</p>
                <p>${x.zip}</p>
                <p>${x.address}</p>
            </div>
        </section>
        `
    })
    document.querySelector(".root").innerHTML = html.join("")
}





