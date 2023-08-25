import './globals.css'
import './tuananh.css'
import './swiper.css'
import './hook.css'
export const metadata = {
  title: 'Givral Bekary',
  description: 'Nha phan phoi banh trung thu givral',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
