// Manage bower dependencies
module.exports = {
	// Copy bower files into js vendor folder
	vendor: {
		dest: '<%= theme.js %>/vendor',
		options: {
			checkExistence: true,
			overrides: {
				jquery: {
					main: "dist/jquery.js"
				},
				modernizr: {
					main: "modernizr.js"
				},
				html5shiv: {
					ignore: true
				},
				respond: {
					ignore: true
				}
			}
		}
	},
	ie: {
		dest: '<%= theme.js %>/ie',
		options: {
			checkExistence: true,
			overrides: {
				jquery: {
					ignore: true
				},
				modernizr: {
					ignore: true
				},
				html5shiv: {
					main: "dist/html5shiv.js"
				},
				respond: {
					main: "src/respond.js"
				}
			}
		}
	}
}
