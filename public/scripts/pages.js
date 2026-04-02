function get_current_page() {
    return parseInt(localStorage.getItem(`current_page${location.pathname}`)) || 0
}

function save_current_page(current_page) {
    localStorage.setItem(`current_page${location.pathname}`, current_page)
}

function load_page(page_number, pages, main_article, current_page_input, force_load = false) {
    page_number = parseInt(page_number) || 0
    let current_page = get_current_page()

    if (page_number < 0) {
        page_number = 0
    } else if (page_number > pages.length - 1) {
        page_number = pages.length - 1
    }

    if (!force_load) {
        if (page_number == current_page) {
            current_page_input.value = current_page + 1
            return
        } else {
            main_article.removeChild(pages[current_page])
        }
    }

    current_page = page_number
    main_article.appendChild(pages[current_page])
    save_current_page(current_page)

    current_page_input.value = current_page + 1
}

function hide_all_pages(main_article, pages) {
    for (page of pages) {
        main_article.removeChild(page)
    }
}


const pages = document.querySelectorAll("page")
const main_article = document.querySelector("#main-article")
const current_page_input = document.querySelector("#current-page")
const total_page_input = document.querySelector("#total-page")
total_page_input.value = pages.length

// Load current page
hide_all_pages(main_article, pages)
load_page(get_current_page(), pages, main_article, current_page_input, true)
save_current_page(get_current_page())

let next_page_locker = false
const previous_button = document.querySelector("#previous")
const next_button = document.querySelector("#next")

previous_button.addEventListener("click", () => {
    load_page(get_current_page() - 1, pages, main_article, current_page_input)
})

next_button.addEventListener("click", () => {
    load_page(get_current_page() + 1, pages, main_article, current_page_input)
})

current_page_input.addEventListener("blur", () => {
    load_page(current_page_input.value - 1, pages, main_article, current_page_input)
    next_page_locker = false
})

current_page_input.addEventListener("focus", () => {
    next_page_locker = true
})

current_page_input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        load_page(current_page_input.value - 1, pages, main_article, current_page_input)
        current_page_input.blur();
    }
});

document.addEventListener('keydown', function (event) {
    if (!next_page_locker) {
        if (event.key === 'ArrowLeft') {
            load_page(get_current_page() - 1, pages, main_article, current_page_input)
        }
        if (event.key === 'ArrowRight') {
            load_page(get_current_page() + 1, pages, main_article, current_page_input)
        }
        if (event.key === 'l') {
            load_page(get_current_page() + 1, pages, main_article, current_page_input)
        }
        if (event.key === 'h') {
            load_page(get_current_page() - 1, pages, main_article, current_page_input)
        }
    }
});