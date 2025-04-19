import { BenefitsSection } from '@/components/global/BenefitsSection'
import { Carousel } from '@/components/global/carousel'
import { ProductList } from '@/components/global/ProductList'
import { Button } from '@/components/ui/button'
import { GET_BANNERS } from '@/services/banners'
import { GET_PRODUCTS } from '@/services/products'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

export default async function Home() {
	const { products } = await GET_PRODUCTS()
	const { assets } = await GET_BANNERS()

	const freemarketproducts = products.filter(
		(p) => p.affiliate.name === 'Mercado Livre',
	)

	const amazonproducts = products.filter(
		(p) => p.affiliate.name === 'Amazon',
	)

	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<Carousel autoPlay>
				{assets.map((asset) => (
					<Image
						width={1240}
						height={1240}
						key={asset.id}
						alt={'Banner do carousel'}
						src={asset.url}
						style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
					/>
				))}
			</Carousel>

			<BenefitsSection />

			<div className='border border-border mt-4'>
				<section>
					<ProductList
						title='Produtos Mercado Livre'
						products={freemarketproducts}
					/>
					<div className='p-4 flex justify-end'>
						<Button asChild>
							<Link href={'/mercadolivre'}>Ver mais...</Link>
						</Button>
					</div>
				</section>

				<section>
					<ProductList title='Produtos Amazon' products={amazonproducts} />
					<div className='p-4 flex justify-end'>
						<Button asChild>
							<Link href={'/amazon'}>Ver mais...</Link>
						</Button>
					</div>
				</section>
			</div>
		</div>
	)
}
