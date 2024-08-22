/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['us-east-1-shared-usea1-02.graphassets.com', 'media.graphassets.com'], 
	},
};

module.exports = nextConfig;
