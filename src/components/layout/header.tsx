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
import { categories, links } from '@/config/categories'
import Link from 'next/link'
import { Button } from '../ui/button'

const Header = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className='bg-primary shadow-md p-4 lg:p-8 flex lg:flex-row flex-col items-center justify-between'>
			<div className='flex justify-between  w-full items-center'>
				<h1 className='w-full text-4xl font-extrabold text-secondary'>
					Meli Shop
				</h1>
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
				<nav className='flex lg:flex-row flex-col w-full'>
					{links.map((link) => (
						<Button
							sizes='full'
							className='lg:justify-center justify-start'
							variants='link'
							key={link.id}
							asChild
						>
							<Link
								className='text-secondary font-semibold truncate'
								href={link.url}
							>
								{link.label}
							</Link>
						</Button>
					))}

					{categories.map((category) => (
						<DropDownRoot key={category.label}>
							<DropDownTrigger
								sizes='full'
								className='justify-start text-secondary font-semibold'
								variants='link'
							>
								{category.label}
							</DropDownTrigger>
							<DropDownContent className='w-56'>
								<DropDownLabel>Categorias</DropDownLabel>
								<DropDownList>
									{category.items.map((item) => (
										<DropDownItem key={item}>{item}</DropDownItem>
									))}
								</DropDownList>
							</DropDownContent>
						</DropDownRoot>
					))}
				</nav>
				<Input
					type='text'
					placeholder='Buscar produtos...'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='w-64'
				/>
			</div>
		</header>
	)
}

export { Header }
