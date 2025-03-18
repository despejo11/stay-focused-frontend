import './global.scss'
import '@/styles/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Stay Focused</title>
      </head>
      <body>
        <div className='screenWidthWarning'>
          <img src='/images/other/logoBlue.svg' alt='Logo' />
          <p>
            Only for devices <br />
            wider than 320px!
          </p>
        </div>

        <div className='screenContent'>{children}</div>
      </body>
    </html>
  )
}
