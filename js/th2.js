let items = ["Backpack", "MiBand watch", "Ring"]
console.log(items);

let list = document.getElementById("list")

function veListItems(items) {
    for (let i = 0; i < items.length; i++) {
        list.insertAdjacentHTML("beforeend", `<li>${items[i]} <button onclick="xoa(${i})">Remove</button></li>`)
    }
}
veListItems(items)
let inputText = document.getElementById("input_text")
let btnAdd = document.getElementById("btn_add")

console.log(inputText);
console.log(btnAdd);
btnAdd.addEventListener("click", () => {
    items.push(inputText.value)
    list.innerHTML = ""
    veListItems(items)
    inputText.value = ""
})

function xoa(vitri) {
    items.splice(vitri, 1)
    list.innerHTML = ""
    veListItems(items)
    console.log(items);
}