'use client'

import { useNotification } from '@/context/notification'
import { Button } from '@/components/ui/button'
import type { Cupom } from '@/services/cupons'

const CopyCupom = ({ cupom }: { cupom: Cupom }) => {
	const { showNotification } = useNotification()

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
		<>
			{isCouponExpired(cupom.validity) ? (
				<Button
					variants='disabled'
					sizes='full'
					className='mt-4 cursor-pointer'
					onClick={() => handleCopyCoupon(cupom.label)}
				>
					Cupom expirado
				</Button>
			) : (
				<Button
					sizes='full'
					className='mt-4 cursor-pointer'
					onClick={() => handleCopyCoupon(cupom.label)}
				>
					Copiar Cupom
				</Button>
			)}
		</>
	)
}

export { CopyCupom }
