function addCounter(maxNum) {
    let counter = 0;
    let output = 0;
    for (counter = 0; counter <= maxNum; counter++) {
        output+= `<li>${counter}</li>`;
    }
    return output;
}

document.getElementById("javascript_list").innerHTML = `<li>${addCounter(10)}</li>`;

var germany = (food) => {
    return `German people eat ${food}`;
}

document.getElementById("germany").innerText = germany("Sausages");