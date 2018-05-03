document.addEventListener('DOMContentLoaded', function() {
    var arrWords=[];
    var userTextт = document.getElementById("words__input");
    var sendButton = document.getElementById("words__button");
    var newArray=[];


        sendButton.addEventListener('click', clickButtonSend);

            function clickButtonSend() {
                if (userTextт.value == "") {
                    alert("Введите текст произвольной длины!");
                }
                else {
                    arrWords = userTextт.value.split(" ");
                    if (arrWords.length == 1) {
                        alert("Ваша фраза записана одним словом: " + arrWords[0] + ".");
                    }
                    else {
                        var newArray = arrWords.sort(compareWords);
                        if (newArray.length == 2) {
                            alert("Ваша фраза состоит из двух слов: " + newArray[0] + "; " + newArray[1] + ".");
                        }
                        else {
                            alert("Три самых длинных слова в Вашей фразе: " + newArray[0] + "; " + newArray[1] + "; " + newArray[2] + ".");
                        }

                    }
                }
            }

            function compareWords(a, b) {
                if (a.length > b.length) {
                    return -1;
                }
                if (a.length < b.length) {
                    return 1;
                }
                return 0;
                }
});