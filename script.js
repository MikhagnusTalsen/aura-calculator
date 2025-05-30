const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let height = event.target.height.value;
    let weight = event.target.weight.value;
    let looks = event.target.looks.value;
    let networth = event.target.networth.value;
    let aura = Math.floor(((weight / (height / 100) ** 2)));

    if (aura < 18.5) {
        aura *= looks ** 2.71;
    } else if (aura >= 18.5 && aura < 24.9) {
        aura *= looks ** 3.14;
    } else if (aura >= 25 && aura < 27) {
        aura *= looks ** 1.23;
    } else {
        aura *= looks ** 0.7;
    }

    aura = Math.floor(aura) + Number(networth);



    let reuslt = document.querySelector("#result");
    form.style.display = "none"
    reuslt.style.display = "block";
    reuslt.textContent = `Your aura is ${aura}`;


})