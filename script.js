const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = (event.target.height.value);
    const weight = (event.target.weight.value);
    const looks = (event.target.looks.value);
    const networth = (event.target.networth.value);

    if (weight <= 0 || isNaN(weight)) {
        let err = document.getElementById("weighterror");
        err.textContent = "Enter a valid weight";
        err.style.display = "block";
    }
    else if (height <= 0 || isNaN(height)) {
        let err = document.getElementById("heighterror");
        err.textContent = "Enter a valid height";
        err.style.display = "block";
    }
    else if (looks < 0 || looks > 10 || isNaN(looks)) {
        let err = document.getElementById("looksterror");
        err.textContent = "Enter valid looks";
        err.style.display = "block";
    }
    else if (networth < 0 || isNaN(networth)) {
        let err = document.getElementById("networtherror");
        err.textContent = "Enter a valid networth";
        err.style.display = "block";

    } else {
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

        let result = document.querySelector("#result");
        form.style.display = "none"
        result.style.display = "block";
        result.textContent = `Your aura is ${aura}`;
    }
})