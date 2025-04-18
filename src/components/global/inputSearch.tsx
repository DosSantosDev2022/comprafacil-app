'use client'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

export function InputSearch() {
	const router = useRouter()
	const query = router.push
	const searchParams = new URLSearchParams(query as unknown as string)
	const [searchTerm, setSearchTerm] = useState('')

	function handleSearch(term: string) {
		if (term) {
			searchParams.set('query', term)
		} else {
			searchParams.delete('query')
		}

		router.push(`/search?${searchParams.toString()}`)

		// Limpar o valor do campo de busca após submeter a busca
		setSearchTerm('')
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				const target = e.target as typeof e.target & {
					search: { value: string }
				}
				const term = target.search.value
				handleSearch(term)
			}}
			className='flex gap-2 w-full'
		>
			<Input
				type='text'
				id='search'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				required
				icon={<CiSearch />}
				placeholder='Buscar...'
			/>
		</form>
	)
}
