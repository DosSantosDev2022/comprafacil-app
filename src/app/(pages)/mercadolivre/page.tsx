import { PaginationButtons } from '@/components/global/pagination'
import { ProductList } from '@/components/global/ProductList'
import { GET_PRODUCTS_PAGINATION } from '@/services/paginationProducts'
import Image from 'next/image'

interface PageProps {
	searchParams: Promise<{ page?: number }>
}

export default async function MercadoLivrePage({
	searchParams,
}: PageProps) {
	const { page } = await searchParams
	const pageSize = Number(page) || 1
	const first = 20
	const affiliate = 'Mercado Livre'

	const { products, totalCount } = await GET_PRODUCTS_PAGINATION(
		affiliate,
		pageSize,
		first,
	)
	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<Image
				className='border w-full h-64 object-cover'
				alt='Mercado livre'
				src={
					'https://us-west-2.graphassets.com/cm9hctxh603kh07n26vv81w8o/cm9n79hd85qss0dlqr6j44qz2'
				}
				width={1000}
				height={320}
				quality={100}
			/>
			<div className='border border-border mt-4'>
				<ProductList title='Produtos Mercado Livre' products={products} />

				<div className='p-2 w-full flex items-center justify-end'>
					<PaginationButtons
						limit={first}
						page={pageSize}
						total={totalCount}
					/>
				</div>
			</div>
		</div>
	)
}
