Data-Enum
=========

An ENUM data object.

Must be passed an array of possible settings.

~~~~~~~~.js
var enum = new Enum(['foo', 'bar', 'baz']);
~~~~~~~~

Only one setting can be active at a time.

~~~~~~~~.js
var enum = new Enum(['foo', 'bar', 'baz']);
enum.set('foo');
var active = enum.get(); // 'foo'
~~~~~~~~

Dispatches an `ACTIVATE` event when a setting is selected, and a `DEACTIVATE` event when a setting is deselected (ie. a new setting is set).

~~~~~~~~.js
var enum = new Enum(['foo', 'bar', 'baz']);
enum.on('ACTIVATE', function( val ) {
	// handle active value set
});
enum.on('DEACTIVATE', function( oldval ) {
	// handle old active value
});
enum.set('foo');
~~~~~~~~
