function checkPhoneNumber(phone) {
    let phoneWithoutSpecialChars =
        phone.replace(/-/g, '').replace(/_/g, '').replace(/[(]/g, '').replace(/[)]/, '').replace(/ /g, '').replace(/\[/, "").replace(/\]/, "");


    if (phoneWithoutSpecialChars.indexOf("+33") === 0) {
        // phone number with +33
        phoneWithoutSpecialChars = phoneWithoutSpecialChars.replace("+33", "0")
        if (phoneWithoutSpecialChars.length === 10 && parseInt(phoneWithoutSpecialChars) >= 0 && parseInt(phoneWithoutSpecialChars) <= 999999999) {
            return true;
        } else {
            return false;
        }

    } else {
        // phone number without +33

        if (phoneWithoutSpecialChars.length === 10 && parseInt(phoneWithoutSpecialChars) >= 0 && parseInt(phoneWithoutSpecialChars) <= 999999999) {
            return true;
        } else {
            return false;
        }


    }

}


// French phone numbers CORRECTS

checkPhoneNumber("06 01 02 03 04") // true
checkPhoneNumber("+33 6 01 02 03 04") // true
checkPhoneNumber("+ 33 6 01 02 03 04")  // true
checkPhoneNumber("(+33) 6 01 02 03 04") // true
checkPhoneNumber("[+33] 6 01 02 03 04") // true
checkPhoneNumber("0601020304") // true
checkPhoneNumber("(06) 01 02 03 04") // true
checkPhoneNumber("(06) -  01 - 02 03 04") // true
checkPhoneNumber("06 - 01 - 02 - 03 - 04") // true
checkPhoneNumber("06 - 01 - [02] - 03 - 04") // true


// French phone numbers with typing errors

checkPhoneNumber("06 001 02 03 04") // false : TOO MANY NUMBERS
checkPhoneNumber("(06) 001 02 03 04") // false : TOO MANY NUMBERS
checkPhoneNumber("+33 60 001 02 ") // false : not enough numbers
