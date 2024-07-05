

function remove(id) {
    var element = document.querySelector(id);
    element.remove();
}

function alert1(select) {
    var pet = document.getElementById("box1");
    alert(pet.options[pet.selectedIndex].value);
}

function addOne(id) {
    var element = document.querySelector(`#${id}`)
    console.log(element)
    element.innerText++
}

