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

		it("can have the active value changed", function() {
			var data = new Enum(['foo', 'bar', 'baz']);
			data.set('foo');
			expect(data.get()).toEqual('foo');
		});

	});

});
