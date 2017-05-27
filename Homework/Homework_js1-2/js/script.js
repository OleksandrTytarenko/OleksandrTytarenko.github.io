(function () {
    "use strict";


    function pow(x, n) {
        var result = x;
        for (var i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }

    var x = prompt('введите число', '');
    var n = prompt('введите степень', '');

    if (n <= 1) {
        alert('Степень ' + n + 'не поддерживается, введитн целую степень, больше 1');
    } else {
        alert(pow(x, n));
    }

    console.log(pow(x, n));


}) ();