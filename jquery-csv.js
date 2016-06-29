(function ( $ ) {
  $.parseDV = function(string, delimiter) {
    if(typeof delimiter === 'undefined') delimiter = ','

    // sanity checking
    var regex = new RegExp(`^([A-z0-9]+[${delimiter}])+[A-z0-9]+$`)
    if( regex.test(string) === false ) return false

    // compile obj
    var array = string.split(delimiter)
    var obj = {}
    for(var i = 0; i < array.length; i++) {
      obj[i] = array[i];
    }

    return obj
  }

  $.stringifyDV = function(collection, delimiter) {
    // sanity checking
    if( !Array.isArray(collection) ) return false

    typeof delimiter === 'undefined' ? delimiter = ',' : ''
    return collection.join(delimiter)
  }
} (jQuery) )
