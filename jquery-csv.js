(function ( $ ) {
  $.parseCSV = function(csv) {
    var obj, array, i

    array = csv.split(',')
    obj = {}
    for(i = 0; i < array.length; i++) {
      obj[i] = array[i];
    }
    return obj
  }

  $.stringifyCSV = function(collection) {
    var string, i

    string = ''
    if(Array.isArray(collection)) { // it's an array
      string += collection.join(',')
    }
    else { // it's an object
      var keys = Object.keys(collection)
      for(i = 0; i < keys.length; i++) {
        i == keys.length - 1 ?
          string += (collection[keys[i]]) :     // if it's the last in the array, just add
          string += (collection[keys[i]] + ',') // else add a comma too
      }
    }
    return string
  }
} (jQuery) )
