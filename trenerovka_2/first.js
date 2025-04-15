//Button
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Проверяем, есть ли сохранённая тема в localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    // При клике меняем тему
    themeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        // Сохраняем тему в localStorage
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});



//Form
function checkForm(el){
    
    var name = el.name.value;
    var surname = el.surname.value;
    var password = el.password.value;
    var reppassword = el.reppassword.value;
    var gender = el.gender.value;

    var fail =""

    if(name == "" ||surname =="" || password == "" || gender == "")
        fail = "запоните все поля !!";
    else if(name.length <= 1 || name.length >50)
        fail = "введите коректное имя !!";
    else if(password != reppassword)
        fail = "пароли должны совпадать !!";
    else if(password.split("&").length > 1)
        fail = "некорректный прароль !!";

    if(fail != ""){
        document.getElementById('error').innerHTML = fail;
    }else{
        alert("все ок !!")
        window.location = 'https://yummyanime.tv';
    }
    return false;
}
