'use client'
import { Input } from '@/components/ui/input'
import {
	DropDownRoot,
	DropDownTrigger,
	DropDownContent,
	DropDownLabel,
	DropDownItem,
	DropDownList,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { Categories } from '@/config/categories'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaBagShopping } from 'react-icons/fa6'
import { v4 } from 'uuid'
import { InputSearch } from '../global/inputSearch'

const Header = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const afiliatedLinks = [
		{
			id: v4(),
			label: 'Mercado Livre',
			url: 'mercadolivre',
		},
		{
			id: v4(),
			label: 'Amazon',
			url: 'amazon',
		},
		{
			id: v4(),
			label: 'Shoope',
			url: 'shoope',
		},
	]

	return (
		<header className='bg-primary shadow-md p-4 lg:p-8 flex lg:flex-row flex-col items-center justify-between'>
			<div className='flex justify-between  w-full items-center'>
				<Link
					className='flex items-start justify-center space-x-3 text-secondary'
					href={'/'}
				>
					<div className='flex flex-col items-end gap-1'>
						<h1 className='text-4xl font-extrabold leading-none'>
							Compra fácil
						</h1>
						<span className='text-sm italic text-muted'>afiliado</span>
					</div>
				</Link>

				<div className='md:hidden'>
					<Button variants='outline' sizes='icon' onClick={toggleMenu}>
						{isMenuOpen ? (
							<LuX className='h-6 w-6' />
						) : (
							<LuMenu className='h-6 w-6' />
						)}
					</Button>
				</div>
			</div>

			<div
				className={`mt-10 lg:mt-0 flex lg:flex-row flex-col lg:space-x-3 w-full items-start lg:items-center transition-all duration-300 ${
					isMenuOpen ? 'flex' : 'hidden lg:flex'
				}`}
			>
				<nav className='flex lg:flex-row flex-col w-full justify-end'>
					<Button
						className=' text-lg lg:justify-center justify-start'
						variants='link'
						asChild
					>
						<Link
							className='text-secondary font-semibold truncate'
							href={'/cupons'}
						>
							Cupons
						</Link>
					</Button>
					<DropDownRoot>
						<DropDownTrigger
							className='text-lg justify-start text-secondary font-semibold'
							variants='link'
						>
							Afiliado
						</DropDownTrigger>
						<DropDownContent className='w-56'>
							<DropDownList>
								{afiliatedLinks.map((link) => (
									<DropDownItem key={link.id}>
										<Link href={`/${link.url}`}>{link.label}</Link>
									</DropDownItem>
								))}
							</DropDownList>
						</DropDownContent>
					</DropDownRoot>

					<DropDownRoot>
						<DropDownTrigger
							className='text-lg justify-start text-secondary font-semibold'
							variants='link'
						>
							Categorias
						</DropDownTrigger>
						<DropDownContent className='w-56'>
							<DropDownList>
								{Categories.map((category) => (
									<DropDownItem key={category.id}>
										<Link href={`/category${category.url}`}>
											{category.category}
										</Link>
									</DropDownItem>
								))}
							</DropDownList>
						</DropDownContent>
					</DropDownRoot>
				</nav>
				<InputSearch />
			</div>
		</header>
	)
}

export { Header }
