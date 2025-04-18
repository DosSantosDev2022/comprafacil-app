import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-primary text-primary-foreground p-4 lg:p-8'>
			<div className='flex items-center justify-center w-full px-4'>
				<div className='text-center'>
					<h1 className='text-4xl font-extrabold leading-none'>
						Compra fácil
					</h1>
					<span>A sua melhor compra é aqui !</span>
					<p className='text-accent text-xs mt-1'>
						&copy; {new Date().getFullYear()} MeliShop. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
