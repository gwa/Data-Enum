/* global define */
define(['Gwa.Event.Dispatcher'], function( Dispatcher ) {

	return function( settings ) {

		var
		_dispatcher = new Dispatcher(),
		_settings = settings,
		_active,
		_instance = {

			/**
			 * @method  on
			 * @param {String} ev
			 * @param {Function} func
			 * @return {Number}
			 */
			on: function( ev, func ) {
				return _dispatcher.on(ev, func);
			},

			/**
			 * @method  off
			 * @param {String} ev
			 * @param {Function} func
			 */
			off: function( ev, func ) {
				_dispatcher.off(ev, func);
			},

			/**
			 * @method  set
			 * @param {String} key
			 */
			set: function( key ) {
				var a, inarr = false;
				if (_active === key) {
					return;
				}
				for (a in _settings) {
					if (_settings[a] === key) {
						inarr = true;
						break;
					}
				}
				if (!inarr) {
					return;
				}
				if (_active) {
					_dispatcher.dispatch('DEACTIVATE', _active, _instance);
				}
				_active = key;
				_dispatcher.dispatch('ACTIVATE', _active, _instance);
			},

			/**
			 * @method  get
			 * @return {String}
			 */
			get: function() {
				return _active;
			}

		};

		return _instance;

	};

});
