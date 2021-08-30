const { API_KEY } = process.env;

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['images.microcms-assets.io'],
	},
	env: {
		API_KEY
	}
}
