/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'github.com',
      'stlab-storage-main.s3.ap-northeast-2.amazonaws.com',
      'primus-storage-main.s3.ap-northeast-2.amazonaws.com',
    ], // 이미지 호스트를 여기에 추가합니다.
  },
}

export default nextConfig
