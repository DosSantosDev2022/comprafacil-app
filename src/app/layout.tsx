import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NotificationProvider } from '@/context/notification'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Meli Shop App',
	description: 'A sua melhor compra é aqui !',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.className} antialiased scrollbar-custom`}
			>
				<NotificationProvider>
					<Header />
					{children}
					<Footer />
				</NotificationProvider>
			</body>
		</html>
	)
}
