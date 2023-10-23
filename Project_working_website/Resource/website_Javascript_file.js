

function submitDetail(event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById("name").value;
    let passwrd = document.getElementById("password").value;


    // Set the username in local storage
    localStorage.setItem("name",name)
    localStorage.setItem("password",passwrd)
    window.location.href = "http://127.0.0.1:5500/Project_working_website/Resource/web_page.html";
    

}


document.getElementById("detail").textContent = localStorage.getItem("name");

function logout() {
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/Project_working_website/Resource/Home_page_assignment.html";
    console.log('Logout function executed');
}

    // document.getElementById("print1").textContent = userData.username
    // console.log(document.getElementById("print1").innerText = userData.username)

    function changeCounter(counterId, delta) {
        const counter = document.getElementById(counterId);
        if (delta === -1) {
            if (counter.value <= 0) {
                counter.value = 0;
            } else {
                counter.value = parseInt(counter.value) + delta;
            }
        } else {
            counter.value = parseInt(counter.value) + delta;
        }
    }
    const product = document.getElementById("product");
    const productList = document.getElementById("product-list");

    product.addEventListener("mouseover", () => {
        productList.style.display = "block";
    });

    product.addEventListener("mouseout", () => {
        productList.addEventListener("mouseover", () => {
            productList.style.display = "block";
        });
        productList.addEventListener("mouseout", () => {
            productList.style.display = "none";
        });
    });