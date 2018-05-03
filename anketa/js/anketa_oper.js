document.addEventListener('DOMContentLoaded', function() {
    var userSurname = document.getElementById("anketa__userSurname");
    var userName =  document.getElementById("anketa__userName");
    var userPatronymic =  document.getElementById("anketa__userPatronymic");
    var userAge =  document.getElementById("anketa__userAge");
    var genderMan =  document.getElementById("anketa__genderMan");
    var genderWoman =  document.getElementById("anketa__genderWoman");
    var sendButton = document.getElementById("anketa__button");
    var name = document.getElementById("anketa__addName");
    var age = document.getElementById("anketa__addAge");
    var ageDays = document.getElementById("anketa__addAgeDays");
    var gender =  document.getElementById("anketa__addGender");
    var retirementAge =  document.getElementById("anketa__addRetirementAge");
    var manRetiremehtAge = 60;
    var womanRetiremehtAge = 55;


    sendButton.addEventListener('click', clickButtonSend);

    function clickButtonSend() {
        ((userSurname.value.length == 0)||(userName.value.length == 0)||(userPatronymic.value.length == 0)||(userAge.value.length == 0))?alert("Заполните все пустые поля в анкете!"):
            name.innerHTML = " " + userSurname.value + " " + userName.value + " " + userPatronymic.value + ".";
        age.innerHTML = " " + userAge.value + ".";
        ageDays.innerHTML = " " + (Math.floor(userAge.value/4)+userAge.value*365) + ".";
        genderMan.checked?gender.innerHTML = "Мужской.":
        genderWoman.checked?gender.innerHTML = "Женский.":"";

        (genderMan.checked&&userAge.value<manRetiremehtAge)?retirementAge.innerHTML = "Нет.":
        (genderMan.checked&&userAge.value>=manRetiremehtAge)?retirementAge.innerHTML = "Да.":
        (genderWoman.checked&&userAge.value<womanRetiremehtAge)?retirementAge.innerHTML = "Нет.":
        (genderWoman.checked&&userAge.value>=womanRetiremehtAge)?retirementAge.innerHTML = "Да.": "";
    }
});
