const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", togglePasswordVisibility)

function togglePasswordVisibility() {
    if (btn.innerHTML === "Hide Password") {
        btn.innerHTML = "Show Password";
        input.type = "password";
    } else {
        btn.innerHTML = "Hide Password";
        input.type = "text";
    }
}