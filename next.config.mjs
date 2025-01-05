/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        additionalData: `$vb-green: #009B91;`,
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/about.html',
    //             destination: '/about', // 这里将 .html 路由重写为实际路由
    //         },
    //     ];
    // },
}

export default nextConfig