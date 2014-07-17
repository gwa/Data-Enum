define(['Gwa.Data.Enum'], function( Enum ) {

	describe("An ENUM data object", function() {

		it("can be constructed", function() {
			var data = new Enum(['foo', 'bar', 'baz']);
			expect(data).toBeDefined();
		});

		it("can have an active value set", function() {
			var data = new Enum(['foo', 'bar', 'baz']);
			data.set('foo');
			expect(data.get()).toEqual('foo');
		});

		it("cannot have an illegal value set", function() {
			var data = new Enum(['foo', 'bar', 'baz']);
			data.set('foo');
			data.set('qux');
			expect(data.get()).toEqual('foo');
		});

		it("can have the active value changed", function() {
			var data = new Enum(['foo', 'bar', 'baz']);
			data.set('foo');
			expect(data.get()).toEqual('foo');
		});

		it("can have a SETTINGS_CHANGE listener set", function() {
			var data = new Enum(['foo', 'bar', 'baz']);
			var myvar;
			var oldvar;
			data.on('SETTINGS_CHANGE', function( val, oldval ) {
				myvar = val;
				oldvar = oldval;
			});
			data.set('foo');
			expect(data.get()).toEqual('foo');
			expect(myvar).toEqual('foo');
			data.set('baz');
			expect(oldvar).toEqual('foo');
		});

	});

});
