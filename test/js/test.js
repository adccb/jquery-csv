QUnit.test('Parsing values', function(assert) {
  var csv = 'zero,one,two,three,four,five'
  var snake = 'zero_one_two_three_four_five'
  var tilde = 'zero~one~two~three~four~five'
  var dash = 'zero-one-two-three-four-five'
  var one = 'zero1one1two1three1four1five'

  // testing csv
  assert.ok(typeof $.parseDV(csv) === 'object', 'CSV typing')
  assert.ok($.parseDV(csv)[1] === 'one', 'CSV obj correctness')
  assert.ok($.parseDV(csv, null, 'array')[2] === 'two', 'CSV array correctness')

  // testing snake
  assert.ok(typeof $.parseDV(snake, '_') === 'object', 'Snake typing')
  assert.ok($.parseDV(snake, '_')[3] === 'three', 'Snake obj correctness')
  assert.ok($.parseDV(snake, '_', 'array')[4] === 'four', 'Snake array correctness')

  // testing tilde
  assert.ok(typeof $.parseDV(tilde, '~') === 'object', 'Tilde typing')
  assert.ok($.parseDV(tilde, '~')[5] === 'five', 'Tilde obj correctness')
  assert.ok($.parseDV(tilde, '~', 'array')[0] === 'zero', 'Tilde array correctness')

  // testing dash
  assert.ok(typeof $.parseDV(dash, '-') === 'object', 'Dash typing')
  assert.ok($.parseDV(dash, '-')[1] === 'one', 'Dash obj correctness')
  assert.ok($.parseDV(dash, '-', 'array')[2] === 'two', 'Dash array correctness')

  // testing one
  assert.ok(typeof $.parseDV(one, '1') === 'object', 'One typing')
  assert.ok($.parseDV(one, '1')[3] === 'three', 'One obj correctness')
  assert.ok($.parseDV(one, '1', 'array')[4] === 'four', 'One array correctness')
})

QUnit.test('Serializing values', function(assert) {
  var arr = ['zero', 'one', 'two', 'three', 'four', 'five']
  var delimiter = ','
  var serialized = $.stringifyDV(arr, delimiter)

  assert.ok(typeof serialized === 'string', 'Type checking')
  assert.ok(serialized.indexOf('three') !== -1, 'Accessing indexof')

  // set up for regex test
  var regex = new RegExp(`^([A-z0-9]+[${delimiter}])+[A-z0-9]+$`)
  assert.ok(regex.test(serialized), 'Regex checking')
})

QUnit.test('Parsing empty CSV', function(assert) {
  var csv = ',,,,,,,,'
  var parsed = $.parseDV(csv, ',', 'array')

  assert.ok(Array.isArray(parsed), 'Type checking')
  assert.ok(parsed.length === 9, 'Checking length')
})

QUnit.test('Getting output as array', function(assert) {
  var string = 'zero,one,two,three,four,five'
  var delimiter = ','
  var parsed = $.parseDV(string, delimiter, 'array')

  assert.ok(Array.isArray(parsed), 'Type checking')
})

QUnit.test('Parsing invalid values', function(assert) {
  assert.notOk($.parseDV('<>::@#$()@$'), 'Testing arbitrary punctuation')
  assert.notOk($.parseDV('freahfbiofdvpmsiougfjh', '.'), 'Arbitrary strings')
  assert.notOk($.parseDV('dhbcvfkjner3468w9f;werf[srf]'), 'Arbitrary strings with punctuation')
  assert.notOk($.parseDV('\t\s\r'), 'Just whitespace')
  assert.notOk($.parseDV('hello my name is logan'), 'Strings with whitespace')
  assert.notOk($.parseDV('""````\'\'\`\`\"\"\"'), '')
  assert.notOk($.parseDV(''), 'Parsing empty string')
})

QUnit.test('Serializing invalid values', function(assert) {
  assert.notOk($.stringifyDV('<>::@#$()@$'), 'Trying to use a string')
  assert.notOk($.stringifyDV({}), 'Trying to use an object')
  assert.notOk($.stringifyDV([]), 'Trying to use an empty array')
})
