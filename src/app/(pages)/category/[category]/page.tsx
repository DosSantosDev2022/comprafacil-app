import { ProductList } from '@/components/global/ProductList'
import { GET_PRODUCTS } from '@/services/products'

interface CategoryParams {
	params: Promise<{ category: string }>
}

export default async function Category({ params }: CategoryParams) {
	const category = await params
	const capitalizeFirstLetter = (text: string) =>
		text.charAt(0).toUpperCase() + text.slice(1)

	const { products } = await GET_PRODUCTS()

	const productsCategories = products.filter(
		(p) => p.category.url === category.category,
	)

	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<div className='w-full text-start bg-secondary text-secondary-foreground p-12 rounded-b-2xl'>
				<h1 className='text-4xl font-bold'>
					Categoria{' '}
					<span className='text-primary'>
						{capitalizeFirstLetter(category.category)}
					</span>
				</h1>
			</div>
			<div className='border border-border mt-4'>
				{productsCategories ? (
					<ProductList
						title='Por categoria'
						products={productsCategories}
					/>
				) : (
					<span>Produtos não cadastrados</span>
				)}
			</div>
		</div>
	)
}
