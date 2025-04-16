import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-secondary text-secondary-foreground p-4 lg:p-8'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<h1 className='w-full text-4xl font-extrabold text-primary'>
							Meli Shop
						</h1>
						<span>A sua melhor compra é aqui !</span>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Redes Sociais</h3>
						<ul>
							<li>
								<Link href='https://www.facebook.com/'>Facebook</Link>
							</li>
							<li>
								<Link href='https://www.twitter.com/'>Twitter</Link>
							</li>
							<li>
								<Link href='https://www.instagram.com/'>Instagram</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Informações</h3>
						<p>
							&copy; {new Date().getFullYear()} MeliShop. Todos os direitos
							reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
