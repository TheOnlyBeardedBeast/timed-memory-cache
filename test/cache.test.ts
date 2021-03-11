import Cache, { DEFAULT_TTL } from '../src';

describe('Cache storage', () => {
  const cache = new Cache<string>();

  it('cache created', () => {
    expect(cache.length).toEqual(0);
  });

  it('cache entry set', () => {
    cache.set('1', '1');
    cache.set('2', '2');

    expect(cache.get('1')).toEqual('1');
    expect(cache.get('2')).toEqual('2');
    expect(cache.length).toEqual(2);
  });

  it('cache entry updated', () => {
    cache.set('1', '3');

    expect(cache.get('1')).toEqual('3');
    expect(cache.get('2')).toEqual('2');
    expect(cache.length).toEqual(2);
  });

  it('cache entry remove and callback', () => {
    cache.set('3', '3', {
      onRemove: (key, data) => {
        expect(key).toBe('3');
        expect(data).toBe('3');
        expect(cache.get('3')).toBe(undefined);
      },
    });

    cache.remove('3');

    expect(cache.length).toEqual(2);
  });

  it('cache cleared', () => {
    cache.clear();

    expect(cache.length).toEqual(0);
  });
});

describe('Time-based cache', function() {
  let cache: Cache<string>;

  /**
   * On each test, we create a new cache storage.
   */
  beforeEach(function() {
    cache = new Cache<string>();
  });

  /**
   * The elements time-to-live.
   */
  const ttl = 1 * 1000;

  /**
   * Cache insertion using a TTL.
   */
  it('should be able to set a ttl on a cached object', function(done) {
    cache.set('foo', 'bar', { ttl: ttl });

    // Awaiting for the element to be evicted.
    setTimeout(function() {
      expect(cache.get('foo')).toBe(undefined);
      done();
    }, ttl + 1);
  });

  /**
   * Cache insertion using the default TTL.
   */
  it('should be able to use the default ttl on a cached object', function(done) {
    jest.setTimeout(70000);
    var originalTtl = DEFAULT_TTL;

    // Inserting an element.
    cache.set('foobar', 'baz');

    // Awaiting for the element to be evicted.
    setTimeout(function() {
      expect(cache.get('foobar')).toBe(undefined);
      done();
    }, originalTtl + 1);
  });

  /**
   * Callback upon element eviction.
   */
  it('should be able to call back a function upon element eviction', function(done) {
    // We use the second as a unit of measure for
    // the elasped time to avoid delays caused by the
    // Javascript event loop.
    var time = function() {
      return Math.floor(Date.now() / 1000);
    };
    var start = time();

    cache.set('foobar', 'baz', {
      ttl: ttl,
      onRemove: (_key, _value) => {
        expect(time()).toBe(start + ttl / 1000);
        done();
      },
    });
  });
});
