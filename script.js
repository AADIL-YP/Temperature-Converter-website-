document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const temperatureInput = document.getElementById("temperature").value;
    const errorMessage = document.getElementById("error");
    const result = document.getElementById("result");

    errorMessage.style.display = "none";
    result.textContent = '';

    if (isNaN(temperatureInput) || temperatureInput === "") {
        errorMessage.textContent = "Please enter a valid number.";
        errorMessage.style.display = "block";
        return;
    }

    const temperature = parseFloat(temperatureInput);

    if (temperature < 35) {
        result.textContent = "Your temperature is below normal.";
    } else if (temperature >= 35 && temperature <= 37.5) {
        result.textContent = "Your temperature is normal.";
    } else {
        result.textContent = "You have a high temperature. Consult a doctor!";
    }

    const messages = [
        "Scanning...",
        "Analyzing...",
        "Calculating results...",
        result.textContent
    ];

    let i = 0;
    result.textContent = "";  


    const loop = setInterval(function() {
        if (i < messages.length) {
            result.textContent = messages[i];
            i++;
        } else {
            clearInterval(loop);
        }
    }, 800);
});

document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("temperature").value = "";
    document.getElementById("error").style.display = "none";
    document.getElementById("result").textContent = "";
});
