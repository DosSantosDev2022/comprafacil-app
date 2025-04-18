/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'us-west-2.graphassets.com'
      },
      {
        protocol: 'https',
        hostname: 'sa-east-1.graphassets.com'
      }
    ]
  }
}

export default nextConfig