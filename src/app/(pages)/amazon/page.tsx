import { BenefitsSection } from '@/components/global/BenefitsSection'
import { ProductList } from '@/components/global/ProductList'
import { GET_PRODUCTS } from '@/services/products'
import Image from 'next/image'

export default async function AmazonPage() {
	const { products } = await GET_PRODUCTS()

	const filterproducts = products.filter(
		(p) => p.affiliate.name === 'Amazon',
	)

	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<Image
				className='border w-full h-64 object-cover'
				alt='Mercado livre'
				src={
					'https://us-west-2.graphassets.com/cm9hctxh603kh07n26vv81w8o/cm9n7eowl5vb10dlqvdt6de92'
				}
				width={1000}
				height={320}
				quality={100}
			/>
			<div className='border border-border mt-4'>
				<ProductList title='Produtos Amazon' products={filterproducts} />
			</div>
		</div>
	)
}
