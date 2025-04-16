'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useNotification } from '@/context/notification'
import { BiSolidCoupon } from 'react-icons/bi'

export default function CuponsPage() {
	const { showNotification } = useNotification()
	const coupons = [
		{
			id: 1,
			code: 'DESCONTO10',
			description: '10% de desconto em todos os produtos',
			expires: '20/04/2025',
		},
		{
			id: 2,
			code: 'FRETEGRATIS',
			description: 'Frete grátis para compras acima de R$100',
			expires: '31/12/2023',
		},
		{
			id: 3,
			code: 'PRIMEIRACOMPRA',
			description: '15% de desconto na primeira compra',
			expires: '30/05/2025',
		},
		{
			id: 4,
			code: 'BEMVINDO',
			description: '20% de desconto para novos clientes',
			expires: '15/08/2025',
		},
		{
			id: 5,
			code: 'PROMO50',
			description: '50% de desconto em produtos selecionados',
			expires: '31/12/2023',
		},
	]

	const handleCopyCoupon = (code: string) => {
		navigator.clipboard.writeText(code)
		showNotification('Cupom copiado com sucesso !!', 'success')
	}

	const isCouponExpired = (expires: string) => {
		const today = new Date()
		const expiresDate = new Date(expires.split('/').reverse().join('-'))
		return expiresDate < today
	}

	return (
		<div className='lg:p-20 p-2'>
			<div className='bg-secondary border mb-8 p-14 flex items-center rounded-b-2xl'>
				<h1 className='lg:text-6xl text-4xl flex gap-3 justify-center items-center font-bold text-secondary-foreground'>
					<BiSolidCoupon size={82} />
					Cupons Disponíveis
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				{coupons.map((coupon) => (
					<Card key={coupon.id}>
						<CardHeader>
							<CardTitle>{coupon.code}</CardTitle>
							<CardDescription>{coupon.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<CardDescription>
								Válido até: {coupon.expires}
							</CardDescription>
							{isCouponExpired(coupon.expires) ? (
								<Button
									variants='disabled'
									sizes='full'
									className='mt-4 cursor-pointer'
									onClick={() => handleCopyCoupon(coupon.code)}
								>
									Cupom expirado
								</Button>
							) : (
								<Button
									sizes='full'
									className='mt-4 cursor-pointer'
									onClick={() => handleCopyCoupon(coupon.code)}
								>
									Copiar Cupom
								</Button>
							)}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
