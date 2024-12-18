/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:8000/:path*' // Replace with your API URL and port
            }
        ]
    }
};

export default nextConfig;
