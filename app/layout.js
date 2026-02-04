import './globals.css'

export const metadata = {
  title: 'Dylan Mugo | Full-Stack Developer',
  description: 'Portfolio of Dylan Mugo - Full-Stack Developer based in Ireland',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
