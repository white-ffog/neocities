const header_html = `
<h1 id="logo"> ~ WhiteFog ~ </h1>

<nav id="nav-menu">
<a href="/">Home</a><span class="no-select"> | </span>
<a href="/blogs.html">Blogs</a><span class="no-select"> | </span>
<a href="/about.html">About</a>
<hr />
`

const footer_html = `
<hr />
<div id="regard"><em>"This site was made by a human that can make mistakes. So
please, verify any information present here. Any problem contact me via
email."<em></div>

<div id="trademark"> © WhiteFog, 2025 | Contato: dopauarthur@gmail.com<div/>
`

window.addEventListener("load", () => {
    const header = document.createElement("header")
    header.innerHTML = header_html
    const footer = document.createElement("footer")
    footer.innerHTML = footer_html

    document.body.prepend(header)
    document.body.append(footer)
});
