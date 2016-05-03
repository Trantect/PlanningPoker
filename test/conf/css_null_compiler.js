function noop() {
  return null;
}

require.extensions['.scss'] = noop;
require.extensions['.less'] = noop;
require.extensions['.svg'] = noop;