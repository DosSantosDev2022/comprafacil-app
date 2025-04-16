import { FaTruck, FaHeadset, FaShieldAlt, FaTags } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const BenefitsSection = () => {
	const benefits = [
		{
			id: uuidv4(),
			icon: <FaTags size={32} />,
			title: 'Descontos',
			description: 'Cupons e descontos toda semana',
		},
		{
			id: uuidv4(),
			icon: <FaTruck size={32} />,
			title: 'Entrega grátis',
			description: '100% grátis em muitos produtos',
		},
		{
			id: uuidv4(),
			icon: <FaHeadset size={32} />,
			title: 'Suporte 24/7',
			description: 'Nós nos importamos com suas experiências',
		},
		{
			id: uuidv4(),
			icon: <FaShieldAlt size={32} />,
			title: 'Afiliado ML',
			description: 'O melhor lugar para comprar é aqui',
		},
	]

	return (
		<div className='bg-secondary lg:py-10 p-2 rounded-b-2xl'>
			<div className='container mx-auto lg:px-4'>
				<div className='flex flex-wrap justify-between gap-3'>
					{benefits.map((benefit) => (
						<div
							key={benefit.id}
							className='flex-1 min-w-[150px] text-center text-secondary-foreground p-4'
						>
							<div className='flex justify-center mb-4'>
								{benefit.icon}
							</div>
							<h3 className='lg:text-xl text-sm font-bold mb-2'>
								{benefit.title}
							</h3>
							<p className='lg:text-sm text-xs font-light'>
								{benefit.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export { BenefitsSection }
