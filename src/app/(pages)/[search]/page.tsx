import { ProductList } from '@/components/global/ProductList'
import { GET_PRODUCTS } from '@/services/products'

interface PageProps {
	searchParams: Promise<{ query?: string }>
}

export default async function SearchPage({ searchParams }: PageProps) {
	const { query } = await searchParams
	const searchTerm = query?.toLowerCase() || ''
	const capitalizeFirstLetter = (text: string) =>
		text.charAt(0).toUpperCase() + text.slice(1)

	const { products } = await GET_PRODUCTS()

	const filteredProducts = products.filter((product) => {
		const nameMatch = product.title.toLowerCase().includes(searchTerm)

		const categoryMatch = product.category.url
			.toLowerCase()
			.includes(searchTerm)
		return nameMatch || categoryMatch
	})

	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<div className='w-full text-start bg-secondary text-secondary-foreground p-12 rounded-b-2xl'>
				<h1 className='text-4xl font-bold'>
					Buscado por:{' '}
					<span className='text-primary'>
						{capitalizeFirstLetter(query || '')}
					</span>
				</h1>
			</div>
			<div className='border border-border mt-4'>
				{filteredProducts ? (
					<ProductList
						title={`Produtos encontrados para busca: ${query}`}
						products={filteredProducts}
					/>
				) : (
					<span>Produtos não cadastrados</span>
				)}
			</div>
		</div>
	)
}
