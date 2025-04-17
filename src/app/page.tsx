import { BenefitsSection } from '@/components/global/BenefitsSection'
import { Carousel } from '@/components/global/carousel'
import { ProductList } from '@/components/global/ProductList'
import { productsData } from '@/config/products'
import { GET_PRODUCTS } from '@/services/products'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import page from './(pages)/cupons/page'

export default async function Home() {
	const { products } = await GET_PRODUCTS()
	console.log('produtos:', products)
	const images = [
		{
			id: uuidv4(),
			src: 'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9i1lgr0dm0vdk8bz7z',
			alt: 'Slide imagem 001',
		},

		{
			id: uuidv4(),
			src: 'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9w1lgw0dm0xix4el9s',
			alt: 'Slide imagem 002',
		},
		{
			id: uuidv4(),
			src: 'https://sa-east-1.graphassets.com/clxmin3ph09z306lm77v5cn42/cm577hu9x1l5306lrvktybxvf',
			alt: 'Slide imagem 003',
		},
	]

	return (
		<div className='lg:px-20 lg:py-4 px-0 py-0'>
			<Carousel autoPlay>
				{images.map((img, index) => (
					<Image
						width={1240}
						height={1240}
						key={img.id}
						alt={img.alt}
						src={img.src}
						style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
					/>
				))}
			</Carousel>

			<BenefitsSection />

			<div className='border mt-4'>
				<ProductList title='Produtos em destaques' products={products} />
				<ProductList title='Mais vendidos' products={products} />
			</div>
		</div>
	)
}
