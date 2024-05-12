const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      domains: [],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          
        },
      ],
      },
      
    };
    export default nextConfig;
