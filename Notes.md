# Overall learnings:

- Hash maps (Map) is good for lookups when you need a key/value pair, for ex: to find the number of instances of a given element in an array
  - Common methods: map.has (finds whether a key exists in the map), map.set (adds a key/value pair to the map), map.get (for a given key, returns the value)
- Sets (Set) is good for finding unique elements. It is akin to an array that will remove duplicates that are added. Useful for finding unique values in a string or array (see pangrams)
- Spread operator (...array) "spreads" or outputs an array or string into its individual elements, which you can then run operations on like sum, Math.max(), etc.
  - So for instance an array[0, 1, 2, 3, 4] set in a variable spreadArray = [...array] would output 0 1 2 3 4 and you can then run sum(spreadArray) to get the value (10)
