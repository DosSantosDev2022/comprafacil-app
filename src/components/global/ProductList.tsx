import type { Product } from '@/@types'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaLink } from 'react-icons/fa'

interface ProductListProps {
	products: Product[]
	title?: string
}

const ProductList = ({ products, title }: ProductListProps) => {
	return (
		<div className='bg-background py-10'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold mb-8 text-center'>
					{title}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{products.map((product) => (
						<div
							key={product.id}
							className='flex flex-col justify-between border border-border rounded-lg overflow-hidden shadow'
						>
							<Image
								src={product.image}
								alt={product.title}
								width={500}
								height={300}
								className='w-full h-48 object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-xl font-semibold mb-2'>
									{product.title}
								</h3>
								<p className='text-muted-foreground mb-4'>
									{product.description}
								</p>
								<Button
									className='font-bold'
									variants='accent'
									sizes='full'
									asChild
								>
									<Link
										target='_blank'
										className='space-x-2'
										href={product.link}
									>
										Ver Produto <FaLink />
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export { ProductList }
