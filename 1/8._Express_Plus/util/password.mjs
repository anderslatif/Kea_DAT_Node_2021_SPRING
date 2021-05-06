import bcrypt from "bcrypt";

const saltRounds = 12;
const plainTextPassword = "Napster";
const incorrectPassword = "superSecretPassword";
const hashedPassword = "$2b$12$nNmpuT90vBessd6ba6Os6uge3qYqVFoI03N4CVgNoNsx8bjn0ogia";

/* signup, login, logout */

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});

bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    console.log("Is the password correct?", result);
});

bcrypt.compare(incorrectPassword, hashedPassword, (error, result) => {
    console.log("Is the password correct?", result);
});



export default {}