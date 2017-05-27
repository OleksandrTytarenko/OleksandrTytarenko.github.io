(function () {
    "use strict";

var names = ['Андрей', 'Владимир', 'Степан', 'Сергей', 'Яков'];

var name =  prompt('Введите имя', '');

for (var i = 0; i < names.length; i++) {
    if (name === names[i]) {
        alert(name + ', вы успешно вошли');
        return false;
    } else {
        alert('Ошибка');
    }
}

}) ();
