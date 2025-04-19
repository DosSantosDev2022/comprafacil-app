'use client'

import { usePagination } from '@/hooks/usePagination'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LuChevronsLeft, LuChevronsRight } from 'react-icons/lu'
import { usePathname } from 'next/navigation'

interface PaginationProps {
	page: number
	limit: number
	total: number
}

const PaginationButtons = ({ page, limit, total }: PaginationProps) => {
	const pathname = usePathname()

	const { pages } = usePagination({
		page,
		limit,
		total,
	})

	const isFirstPage = page === 1
	const isLastPage = page === Math.ceil(total / limit)

	return (
		<div className='mt-8 flex w-full items-center justify-between p-2'>
			<span className='text-muted flex w-full font-light'>
				Mostrando {Math.min(limit, total - (page - 1) * limit)} de {total}
			</span>

			<div className='flex items-center gap-2'>
				<Button
					className={` ${isFirstPage ? 'pointer-events-none opacity-50' : ''}`}
					sizes='icon'
					variants='primary'
					asChild
				>
					<Link
						href={!isFirstPage ? `${pathname}?page=1` : '#'}
						passHref
						aria-label='Primeira página'
					>
						<LuChevronsLeft />
					</Link>
				</Button>
				{pages.map((pageNumber) => (
					<Button
						variants='primary'
						asChild
						sizes='icon'
						key={pageNumber}
						className={`${
							page === pageNumber ? 'pointer-events-none opacity-50' : ''
						}`}
					>
						<Link
							href={
								page !== pageNumber
									? `${pathname}?page=${pageNumber}`
									: '#'
							}
							aria-label={`Página ${pageNumber}`}
						>
							{pageNumber}
						</Link>
					</Button>
				))}

				<Button
					variants='primary'
					sizes='icon'
					className={`${isLastPage ? 'pointer-events-none opacity-50' : ''}`}
					asChild
				>
					<Link
						href={!isLastPage ? `${pathname}?page=${page + 1}` : '#'}
						passHref
						aria-label='Última página'
					>
						<LuChevronsRight />
					</Link>
				</Button>
			</div>
		</div>
	)
}

export { PaginationButtons }
