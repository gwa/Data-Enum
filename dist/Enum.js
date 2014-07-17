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
				var a, inarr = false, oldvalue = null;
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
					oldvalue = _active;
				}
				_active = key;
				_dispatcher.dispatch('SETTINGS_CHANGE', _active, oldvalue, _instance);
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
