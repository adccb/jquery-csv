QUnit.test('Parsing CSV', function(assert) {
  var csv = 'zero,one,two,three,four,five'
  var parsed = $.parseDV(csv)

  assert.ok(typeof parsed == 'object', 'Type checking')
  assert.ok(parsed[1] === 'one', 'Accessing indices')
})

QUnit.test('Serializing CSV', function(assert) {
  var arr = ['zero', 'one', 'two', 'three', 'four', 'five']
  var delimiter = ','
  var serialized = $.stringifyDV(arr, delimiter)

  assert.ok(typeof serialized === 'string', 'Type checking')
  assert.ok(serialized.indexOf('three') !== -1, 'Accessing indexof')

  // set up for regex test
  var regex = new RegExp(`^([A-z0-9]+[${delimiter}])+[A-z0-9]+$`)
  assert.ok(regex.test(serialized), 'Regex checking')
})

QUnit.test('Parsing dash-case', function(assert) {
  var string = 'zero-one-two-three-four-five'
  var parsed = $.parseDV(string, '-')

  assert.ok(typeof parsed == 'object', 'Type checking')
  assert.ok(parsed[1] === 'one', 'Accessing indices')
})

QUnit.test('Serializing dash-case', function(assert) {
  var arr = ['zero', 'one', 'two', 'three', 'four', 'five']
  var delimiter = '-'
  var serialized = $.stringifyDV(arr, delimiter)

  assert.ok(typeof serialized === 'string', 'Type checking')
  assert.ok(serialized.indexOf('three') !== -1, 'Accessing indexof')

  // set up for regex test
  var regex = new RegExp(`^([A-z0-9]+[${delimiter}])+[A-z0-9]+$`)
  assert.ok(regex.test(serialized), 'Regex checking')
})

QUnit.test('Parsing snake_case', function(assert) {
  var string = 'zero_one_two_three_four_five'
  var parsed = $.parseDV(string, '_')

  assert.ok(typeof parsed == 'object', 'Type checking')
  assert.ok(parsed[1] === 'one', 'Accessing indices')
})

QUnit.test('Serializing snake_case', function(assert) {
  var arr = ['zero', 'one', 'two', 'three', 'four', 'five']
  var delimiter = '_'
  var serialized = $.stringifyDV(arr, delimiter)

  assert.ok(typeof serialized === 'string', 'Type checking')
  assert.ok(serialized.indexOf('three') !== -1, 'Accessing indexof')

  // set up for regex test
  var regex = new RegExp(`^([A-z0-9]+[${delimiter}])+[A-z0-9]+$`)
  assert.ok(regex.test(serialized), 'Regex checking')
})

// tests below this line will return false

QUnit.test('Parsing invalid values', function(assert) {
  assert.notOk($.parseDV('<>::@#$()@$'), 'Testing random punctuation')
  assert.notOk($.parseDV('freahfbiofdvpmsiougfjh', '.'), 'No puntuation')
  assert.notOk($.parseDV('\t\s\r'), 'Whitespace')
  assert.notOk($.parseDV(''), '')
})

QUnit.test('Serializing invalid values', function(assert) {
  assert.notOk($.stringifyDV('<>::@#$()@$'), 'Trying to use a string')
  assert.notOk($.stringifyDV({}), 'Trying to use an object')
  assert.notOk($.stringifyDV([]), 'Trying to use an empty array')
})
