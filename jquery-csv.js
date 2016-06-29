(function ( $ ) {
  $.parseDV = function(string, delimiter, mode) {
    if(typeof delimiter === 'undefined' || delimiter === null) delimiter = ','
    if(typeof mode === 'undefined') mode = 'object'
    // sanity checking
    var regex = new RegExp(`^([A-z0-9]*[${delimiter}])+[A-z0-9]*$`) // checks if it's valid csv
    if( regex.test(string) === false ) return false
    // compile obj
    var array = string.split(delimiter)
    if(mode === 'array') return array
    
    var obj = {}
    for(var i = 0; i < array.length; i++) {
      obj[i] = array[i];
    }
    return obj
  }

  $.stringifyDV = function(collection, delimiter) {
    // sanity checking
    if( !Array.isArray(collection) ) return false
    // do the actual work
    if(typeof delimiter === 'undefined' || delimiter === null) delimiter = ','
    return collection.join(delimiter)
  }
} (jQuery) )
