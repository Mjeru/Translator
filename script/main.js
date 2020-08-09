const apiKey = `trnsl.1.1.20200531T112750Z.580e38d852583814.43af3bd4e8b1e727a395679aaea7eae45fdcce58`;
const firstWorkSpase = document.querySelector(`.firstWorkSpace`);
const secondWorkSpase = document.querySelector(`.secondWorkSpace`);
const firstSelector = document.querySelector(`.firstSelector`);
const secondSelector = document.querySelector(`.secondSelector`);
const translateButton = document.querySelector(`.translateButton`);
const request = new XMLHttpRequest();


translateButton.addEventListener(`click`, function() {
    if (firstWorkSpase.value.trim() == ``) return secondWorkSpase.value = `Вы ничего не ввели`;
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${firstWorkSpase.value}&lang=${firstSelector.value}-${secondSelector.value}`;
    request.open(`get`, url);
    request.send();
})
request.addEventListener(`load`, function() {
    const response = JSON.parse(request.response);
    console.log(response);
    if (response.code !== 200) secondWorkSpase.value = `Пороизошла ошибка: ${response.message}`;

    secondWorkSpase.value = response.text[0];
})