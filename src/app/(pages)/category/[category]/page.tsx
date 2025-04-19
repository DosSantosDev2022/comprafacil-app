import { PaginationButtons } from '@/components/global/pagination'
import { ProductList } from '@/components/global/ProductList'
import { GET_PRODUCTS_BY_CATEGORY_PAGINATION } from '@/services/categoryProducts'

interface CategoryParams {
	params: Promise<{ category: string }>
	searchParams: Promise<{ page?: string }>
}

export default async function Category({
	params,
	searchParams,
}: CategoryParams) {
	const { page } = await searchParams
	const { category } = await params
	const categoryUrl = category
	const pageSize = Number(page) || 1
	const first = 20

	const capitalizeFirstLetter = (text: string) =>
		text.charAt(0).toUpperCase() + text.slice(1)

	const { products, totalCount } =
		await GET_PRODUCTS_BY_CATEGORY_PAGINATION(categoryUrl, pageSize, first)

	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<div className='w-full text-start bg-secondary text-secondary-foreground p-12 rounded-b-2xl'>
				<h1 className='text-4xl font-bold'>
					Categoria{' '}
					<span className='text-primary'>
						{capitalizeFirstLetter(categoryUrl)}
					</span>
				</h1>
			</div>

			<div className='border border-border mt-4'>
				{products && products.length > 0 ? (
					<ProductList title='Por categoria' products={products} />
				) : (
					<span className='block p-4'>Produtos não cadastrados</span>
				)}
			</div>
			<div className='p-2 w-full flex items-center justify-end'>
				<PaginationButtons
					limit={first}
					page={pageSize}
					total={totalCount}
				/>
			</div>
		</div>
	)
}
