import { useRef, useState } from 'react'
import type { MediaRatio } from '../interfaces/carousel.interface';
import { aspectRatios } from '../shared/data/Values';


export const useCarouselControls = (variant: MediaRatio, imagesLength: number, aspectRatio?: number) => {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0)
    const config = aspectRatios[variant]
    const ratio = aspectRatio ?? config.ratio
    const desktopItems = config.desktopItems
    const desktopBasis = desktopItems === 3 ? 'lg:basis-[calc((100%-1.5rem)/3)]' : 'lg:basis-[calc((100%-2.25rem)/4)]'

    const scroll = (direction: 1 | -1) => {
        const nextIndex = Math.min(Math.max(activeIndex + direction, 0), imagesLength - 1)
        setActiveIndex(nextIndex)
        scrollRef.current?.children[nextIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        })
    }

    return {
        scrollRef,
        ratio,
        desktopBasis,
        desktopItems,
        activeIndex,

        setActiveIndex,
        scroll
    }

}
