
'use strict';

const FIRST_INDEX = 0;

/**
 * Parses input, depending on the supplied content type. Currently handles application/json and
 * application/x-www-form-urlencoded. Throws an error if the content type is not understood. May
 * also throw if an error occurs in parsing.
 *
 * @param {string} input       The input.
 * @param {string} contentType Content type of the input. Defaults to application/json if not set.
 *                             If additional data such as a charset is present, it will be stripped.
 * @return {object} A collection of key and value pairs as supplied in the input.
 */
module.exports = ( input, contentType ) => {

  let processedContentType = contentType;

  // Default to JSON.
  if ( 'undefined' === typeof processedContentType ) {
    processedContentType = 'application/json';
  }

  // Split the content type down to just the MIME type, in case there's encoding included there too.
  processedContentType = processedContentType.split( ';' )[ FIRST_INDEX ];

  let data;

  switch ( processedContentType ) {

    case 'application/json': {
      data = JSON.parse( input );
      break;
    }

    case 'application/x-www-form-urlencoded': {
      const querystring = require( 'querystring' );
      data = querystring.parse( input );
      break;
    }

    default: {
      throw new Error(
        'Error: Invalid content-type. Please supply either application/json or ' +
        'application/x-www-form-urlencoded.'
      );
    }

  } // Switch contentType.

  return data;

}; // Module.exports.
