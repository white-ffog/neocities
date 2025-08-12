const header_html = `
<h1 id="logo"> WhiteFog 🌁</h1>

<nav id="nav-menu">
<a href="">Entradas</a><span class="no-select"> | </span>
<a href="">Galeria</a><span class="no-select"> | </span>
<a href="">Sobre</a>
</nav>
<hr />
`

const footer_html = `
<hr />
<div id="trademark"> © WhiteFog, 2025 <div/>
`

window.addEventListener("load", () => {
    const header = document.createElement("header")
    header.innerHTML = header_html
    const footer = document.createElement("footer")
    footer.innerHTML = footer_html

    document.body.prepend(header)
    document.body.append(footer)
});
