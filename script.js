const url = "https://api.thecatapi.com/v1/images/search";
const section2 = document.querySelector(".container");
const button = document.querySelector(".btn");
const randomCatPhoto = (json) => {
    section2.classList.add("cats");
    let images = document.createElement("img");
    images.src = json.url;
    images.classList.add("random_cats");
    section2.appendChild(images);
}
const getRandomCats = () => {
    section2.innerHTML = "";
    try {
        const getimagedata = async() => {
            const response = await fetch(url, {
                method: "Get",
                headers: {
                    Accept: "application/json"
                },
            });
            const json = await response.json();
            randomCatPhoto(json[0])
        }
        getimagedata()
    } catch (error) {
        console.log(error)
    }
}
button.addEventListener("click", getRandomCats);
// randomCatPhoto();