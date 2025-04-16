import { useCallback, useEffect, useState } from 'react'

function useCarousel(autoPlay: boolean, autoPlayInterval: number) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [itemsLength, setItemsLength] = useState(0)

	const nextSlide = useCallback(() => {
		if (itemsLength > 0) {
			setCurrentIndex((prev) => (prev + 1) % itemsLength)
		}
	}, [itemsLength])

	const prevSlide = useCallback(() => {
		if (itemsLength > 0) {
			setCurrentIndex((prev) => (prev - 1 + itemsLength) % itemsLength)
		}
	}, [itemsLength])

	const goToSlide = (index: number) => {
		if (index >= 0 && index < itemsLength) {
			setCurrentIndex(index)
		}
	}

	// Lógica de autoplay
	useEffect(() => {
		if (autoPlay) {
			const interval = setInterval(nextSlide, autoPlayInterval)
			return () => clearInterval(interval)
		}
	}, [autoPlay, autoPlayInterval, nextSlide])

	// Lógica de navegação por teclado
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') prevSlide()
			if (event.key === 'ArrowRight') nextSlide()
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [prevSlide, nextSlide])

	const updateItemsLength = (length: number) => {
		setItemsLength(length)
	}

	return {
		currentIndex,
		nextSlide,
		prevSlide,
		goToSlide,
		updateItemsLength,
	}
}

export default useCarousel