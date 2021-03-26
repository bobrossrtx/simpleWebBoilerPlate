var germany = (food) => {
    return `German people eat ${food}`;
}

document.getElementById("germans").innerHTML = `<li>${germany("Sausages")}</li>`;