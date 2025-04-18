import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaLink } from 'react-icons/fa'
import type { Product } from '@/services/products'

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
							className='flex flex-col relative justify-between border border-border rounded-lg overflow-hidden shadow p-4'
						>
							<Image
								className='absolute top-0 rounded-full'
								alt={product.affiliate.name}
								src={product.affiliate.image.url}
								width={50}
								height={50}
								quality={100}
							/>
							<Image
								src={product.image?.url}
								alt={product.title}
								width={500}
								height={300}
								className='w-full h-48 object-contain border border-border'
							/>
							<div className='p-2'>
								<h3 className='text-lg font-semibold mb-2'>
									{product.title}
								</h3>
								<p className='text-muted-foreground mb-2 text-sm'>
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
										href={product.url || ''}
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
