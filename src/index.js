import "./scss/style.scss";
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";


let modalButton = document.querySelector(".modal__button");
let closeButton = document.querySelector(".close__button");
let modal = document.querySelector(".main-modal");

modalButton.addEventListener("click",(e) => {
    e.preventDefault()
    modal.classList.add("active")
});

closeButton.addEventListener("click",(e) => {
    e.preventDefault()
    modal.classList.remove("active")
});

