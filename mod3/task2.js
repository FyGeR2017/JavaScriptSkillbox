function formatName(userName, userSurname) {
    let firstletterName = userName[0].toUpperCase();
    let firstletterSurname = userSurname[0].toUpperCase();
    let restName = userName.slice(1).toLowerCase();
    let restSurname = userSurname.slice(1).toLowerCase();
    console.log(`${firstletterName}${restName} ${firstletterSurname}${restSurname}`)
}

formatName('ивАН','иВаНоВ')
formatName('ПЕТР','ПЕТРОВ')