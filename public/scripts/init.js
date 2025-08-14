const header_html = `
<h1 id="logo"> WhiteFog 🌁</h1>

<nav id="nav-menu">
<a href="/">🏡Início</a><span class="no-select"> | </span>
<a href="/dummy.html">🕳️Dummy</a><span class="no-select"> | </span>
<a href="/">🔍Entradas</a><span class="no-select"> | </span>
<a href="/">🖼️Galeria</a><span class="no-select"> | </span>
<a href="/about/index.html">🤔Sobre</a>
<hr />
`

const footer_html = `
<hr />
<div><em id="regard">"Esse site é feito por um humano. Logo, como todo
humano, ele vai errar. Sempre confirme as informações
em outras fontes"</em></div>
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
