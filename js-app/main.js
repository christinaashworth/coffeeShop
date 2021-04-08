const contentTarget = document.querySelector(".coffee")

const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            contentTarget.innerHTML = beanVarieties.map(variety => {
               return `
            <div class="beanVariety">
                <div class="beanVariety__name">Name: ${variety.name}</div>
                <div class="beanVariety__region">Region: ${variety.region}</div>
                <div class="beanVariety__notes">Notes: ${variety.notes}</div>
            </div>`;
            }).join("")
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}
