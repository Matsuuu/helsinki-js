declare class Foobarrer {
    name: string;
    bar(): void;
}
/**
 * @typedef FoobarrerProps
 * @property { string } name
 * @property { number } [age]
 * */
declare const boo: FoobarrerProps;
type FoobarrerProps = {
    name: string;
    age?: number | undefined;
};
