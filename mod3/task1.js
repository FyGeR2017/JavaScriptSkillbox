//В переменную password запишите строку с любым произвольным паролем.
//Проверьте надёжность пароля с помощью условного оператора if.
//Пароль является надёжным, когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание.
//Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».

function checkPassword(password) {
    if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
        console.log('Пароль надёжный');
    } else {
        console.log('Пароль недостаточно надёжный');
    }
}

checkPassword('1234-');
checkPassword("4321_");
checkPassword("qaz-xsw");
checkPassword("_zxd");
checkPassword("_-a");
checkPassword("qaz");
checkPassword("_-3");
checkPassword("123456789");
