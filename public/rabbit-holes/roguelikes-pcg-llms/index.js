const random_img = document.querySelector("#random-img")

const imgs = [
    "house1.png",
    "duck1.png",
    "white-fog-fire.gif"
]

function get_random_img() {
    return imgs[Math.floor(Math.random()*imgs.length)]
}

const img = get_random_img()


document.addEventListener("DOMContentLoaded", () => {
    console.log()
    random_img.src = "./images/" + get_random_img()
})
