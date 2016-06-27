QUnit.test('Parsing CRV', function(assert) {
  var csv = 'zero,one,two,three,four,five'
  var parsed = $.parseCSV(csv)
  assert.ok(typeof parsed == 'object', 'Type checking')
  assert.ok(parsed[1] === 'one', 'Accessing indices')
})

QUnit.test('Serializing CRV from array', function(assert) {
  var arr = ['zero', 'one', 'two', 'three', 'four', 'five']
  var serialized = $.stringifyCSV(arr)
  assert.ok(typeof serialized === 'string', 'Type checking')
  assert.ok(serialized.indexOf('three') !== -1, 'Accessing indexof')
})


QUnit.test('Serializing CSV from obj', function(assert) {
  var obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five'
  }
  var serialized = $.stringifyCSV(obj)
  assert.ok(typeof serialized === 'string', 'Type checking')
  assert.ok(serialized.indexOf('three') !== -1, 'Accessing indexof')
})
