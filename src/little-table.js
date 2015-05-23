var littleTable = (function(window, document) {
  var defaults = {
    selector: '[data-little-table]'
  }

  function init(options) {
    options = options || {};
    var tables = document.querySelectorAll(options.selector || defaults.selector);
    for (var it = 0, lt = tables.length, table; it < lt, table = tables[it]; it++) {
      var ths = table.querySelectorAll('thead th');
      console.log(ths);
      var trs = table.querySelectorAll('tbody tr');
      for (var ir = 0, lr = trs.length, tr; ir < lr, tr = trs[ir]; ir++) {
        var tds = tr.querySelectorAll('td');
        for (var ic = 0, lc = tds.length, td; ic < lc, td = tds[ic]; ic++) {
          var heading = ths[ic].innerHTML;
          td.setAttribute('data-little-heading', heading);
        }
      }
      table.className += ' little-table';
    }
  }

  return init;
})(this, document);
