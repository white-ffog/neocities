const header = `
--------------------------------------------------------------------------------

                          _       ____    _ __     
                          | |     / / /_  (_) /____ 
                          | | /| / / __ \\/ / __/ _ \\
                          | |/ |/ / / / / / /_/  __/
                          |__/|__/_/ /_/_/\\__/\\___/ 
                             / ____/___  ____ _     
                            / /_  / __ \\/ __ \\\`/     
                           / __/ / /_/ / /_/ /      
                          /_/    \\____/\\__, /       
                                      /____/        

--------------------------------------------------------------------------------
`

const footer = `
--------------------------------------------------------------------------------
              © WhiteFog, 2025 | Contato: dopauarthur@gmail.com
--------------------------------------------------------------------------------
`

document.addEventListener("DOMContentLoaded", () => {
    head = document.head || document.getElementsByTagName('head')[0]
    body = document.body || document.getElementsByTagName('body')[0]

    link = document.createElement('link');
    link.rel = "stylesheet"
    link.href = "/styles/base.css"

    head.appendChild(link);

    const pre_header = document.createElement("pre")
    const pre_footer = document.createElement("pre")

    pre_header.innerText = header
    pre_footer.innerText = footer

    body.prepend(pre_header)
    body.append(pre_footer)
})