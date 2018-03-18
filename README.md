# Simple Body Parser

Parses input in either `application/json` or `application/x-www-form-urlencoded` content-types, returning it as an object.

## Usage

Install with Yarn:

    yarn add @tdmalone/simple-body-parser

Or with npm:

    npm install @tdmalone/simple-body-parser

Then, pass strings and get an object back:

    const parse = require( '@tdmalone/simple-body-parser' );

    const body = '{"some":"data"}';
    const data = parse( body, 'application/json' );

    console.log( data );

Ideally, you'd use this while parsing input from some source where the content-type is provided as a header.

## Tests

Coming soon via Jest. Runnable with `yarn test`.

## License

[MIT](LICENSE).
