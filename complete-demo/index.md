// TODO(lazy-dev): Check that the sum function only takes numbers as params

/**
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
    return a + b;
}

let a = 3;
let b = 5;

const s = sum(a, b);

// console.log(s);

// -------------

// TODO(boss-person): Enforce types of user props
// TODO(mr-archi): Create an interface for user props
// TODO(kid): Make sure phone is optional
/**
 * @typedef UserProps
 * @prop {string} name
 * @prop {number} age
 * @prop {string} [phone]
 */

class User {
    /**
     * @param {UserProps} props
     */
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.phone = props.phone;
    }
}

const userProps = {
    name: "HelsinkiJS",
    age: 4,
};

const user = new User(userProps);

// ------------

// TODO(the-p-o): Make sure padleft is usable using a string or a number
// TODO(i-like-DRY): Create a re-usable number checked that does the narrowing thing for us

/**
 * @param {string | number} padding
 * @param {string} input
 */
function padLeft(padding, input) {
    if (isNum(padding)) {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

const toPad = "foo";

console.log(toPad);
console.log(padLeft(5, toPad));
console.log(padLeft("@@@@@", toPad));

/**
 * @param {any} input
 * @returns { input is number }
 */
function isNum(input) {
    return typeof input === "number";
}
