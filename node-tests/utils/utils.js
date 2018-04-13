const add = (a, b) => a + b;

const addAsync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 100);
}

const square = x => x * x;

const squareAsync = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 100);
}

const setName = (user, fullName) => {
    const names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
}

module.exports = { add, addAsync, square, squareAsync, setName }