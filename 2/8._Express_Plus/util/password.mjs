import bcrypt from "bcrypt";

const saltRounds = 12;
const plainTextPassword = "keapass123";
const wrongPassword = "HappyDog";
const hashedPassword = "$2b$12$t5wP5apmn.54QmBwKTdStOJn.d1OWy/6q9HEqiMB2CUztUw5s/FNu";

/* signup, login, logout */

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});

bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    console.log(result);
});


export default {};