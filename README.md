# jquery-csv
A plugin to handle punctuation-delimited values for jQuery.

## Usage

`jquery-csv` defines two functions for working with delimited values.

##### $.parseDV(string, delimiter):  
`string`: a string of punctuation-delimited files.

`delimiter`: a string by which the values are delimited. defaults to `','`

returns false if the string isn't in the form `val1,val2,val3,val4`. (the role of `delimiter` in the above string is played by a comma.) otherwise, returns an object like
:

    {
      0: 'val1',
      1: 'val2',
      2: 'val3',
      3: 'val4'
    }

##### $.stringifyDV(collection, delimiter):

`collection`: an array to be serialized.

`delimiter`: a string by which to delimit the values. defaults to `','`

returns `false` if `collection` is not an array. otherwise, returns a `string` of the values delimited by `delimiter`.

##### Return values

## Get it

Simply download `jquery-csv.js` and insert in a script tag after jQuery in your HTML.

## Tests

Open `/test/index.html` in a web browser to view test results. Tests are available in `/test/js/test.js`.
