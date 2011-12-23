var __ = require('../vendor/underscore.js');

function build_url(options) {
  var
    gubbins = {
      protocol : [/(.*)/, '$1://'],
      port : [/^([^\:])/, ':$1'],
      params : [/^([^\?])/, '?$1'],
      path : [/^([^\/])/, '/$1']
    },
    hostname_settings = {
      host : 'localhost',
      protocol : 'http',
      port : '3000'
    },
    component_types = ['protocol', 'host', 'port', 'path', 'params'];

  var url_components = __.extend(hostname_settings, options);

  __.each(url_components, function(v, k) {
    if (gubbins[k]) {
      url_components[k] = String.prototype.replace.apply(v, gubbins[k]);
    }
  });

  var url =  __.map(component_types, function(v) {
    return url_components[v];
  })
  return __.compact(url).join('');
}

