import { CopyCupom } from '@/components/pages/cupom/copyCupom'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { GET_CUPONS } from '@/services/cupons'
import { BiSolidCoupon } from 'react-icons/bi'

export default async function CuponsPage() {
	const { cupons } = await GET_CUPONS()
	/* const { showNotification } = useNotification() */

	return (
		<div className='lg:p-20 p-2'>
			<div className='bg-secondary border mb-8 p-14 flex items-center rounded-b-2xl'>
				<h1 className='lg:text-6xl text-4xl flex gap-3 justify-center items-center font-bold text-secondary-foreground'>
					<BiSolidCoupon size={82} />
					Cupons Disponíveis
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				{cupons.map((cupom) => (
					<Card key={cupom.id}>
						<CardHeader>
							<CardTitle>{cupom.label}</CardTitle>
							<CardDescription>{cupom.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<CardDescription>
								Vence em : {cupom.validity}
							</CardDescription>
							<CopyCupom cupom={cupom} />
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
