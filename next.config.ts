// next.config.mjs
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
			},
		],
	},
}

export default nextConfig
