import { PaginationButtons } from '@/components/global/pagination'
import { ProductList } from '@/components/global/ProductList'
import { GET_PRODUCTS_PAGINATION } from '@/services/paginationProducts'
import Image from 'next/image'

interface PageProps {
	searchParams: Promise<{ page?: string }>
}

export default async function AmazonPage({ searchParams }: PageProps) {
	const { page } = await searchParams
	const pageNumber = Number(page) || 1
	const pageSize = 20
	const affiliate = 'Amazon'

	const { products, totalCount } = await GET_PRODUCTS_PAGINATION(
		affiliate,
		pageNumber,
		pageSize,
	)
	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<Image
				className='border w-full h-64 object-cover'
				alt='Amazon'
				src={
					'https://us-west-2.graphassets.com/cm9hctxh603kh07n26vv81w8o/cm9n7eowl5vb10dlqvdt6de92'
				}
				width={1000}
				height={320}
				quality={100}
			/>
			<div className='border border-border mt-4'>
				<ProductList title='Produtos Mercado Livre' products={products} />

				<div className=' p-2 w-full flex items-center justify-end'>
					<PaginationButtons
						limit={pageSize}
						page={pageNumber}
						total={totalCount}
					/>
				</div>
			</div>
		</div>
	)
}
