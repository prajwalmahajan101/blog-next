let env = {};
try {
	env = require("./env");
} catch (err) {
	console.log(err);
}
module.exports = {
	webpack(config) {
		config.resolve.fallback = {
			...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
			// by next.js will be dropped. Doesn't make much sense, but how it is
			fs: false, // the solution
			"grey-matter": false,
		};

		return config;
	},
	reactStrictMode: true,
	env: {
		...env,
	},
};
