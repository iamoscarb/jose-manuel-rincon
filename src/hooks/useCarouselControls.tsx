import { useRef } from 'react'

export const useCarouselControls = (visible: number) => {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        scrollRef.current?.scrollBy({
            left: direction === 'right' ? scrollRef.current.clientWidth / visible : -(scrollRef.current.clientWidth / visible),
            behavior: 'smooth',
        })
    }

    return {
        scrollRef,
        scroll
    }

}
