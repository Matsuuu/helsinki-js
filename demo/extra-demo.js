// Cast 'this' context

class Foobarrer {
    constructor() {
        this.name = "Matsu";

        const f = /** @this { Foobarrer } */ function foo() {
            console.log(this);
            this.bar();
        }.bind(this);

        f();
    }

    bar() {
        console.log("Bar");
    }
}

new User();

/**
 * @typedef FoobarrerProps
 * @property { string } name
 * @property { number } [age]
 * */

const boo = /** @type FoobarrerProps */ ({ name: "Matsu" });
