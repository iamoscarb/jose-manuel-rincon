'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded'
import IconButton from '@mui/material/IconButton'

type Photo = {
    src: string
    alt: string
    eyebrow: string
    title: string
}

interface Props {
    visible?: number;
    photosArray: Photo[];
}

export function Carousel({ visible = 4, photosArray }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        scrollRef.current?.scrollBy({
            left: direction === 'right' ? scrollRef.current.clientWidth / visible : -(scrollRef.current.clientWidth / visible),
            behavior: 'smooth',
        })
    }

    return (
        <section className="w-full" aria-label="Gallery">
            <div ref={scrollRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none' }}>
                {photosArray.map((photo, index) => (
                    <motion.article
                        key={index}
                        className="group relative w-[calc(100vw-40px)] min-w-[calc(100%-1rem)] snap-center overflow-hidden rounded-xl bg-stone-200 sm:min-w-[calc(50%-0.5rem)] sm:snap-start lg:min-w-[calc((100%-3rem)/4)]"
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <div className="aspect-4/5 overflow-hidden bg-transparent">
                            <img src={photo.src} alt={photo.alt} className="size-full object-cover transition duration-700 hover:scale-105" />
                        </div>
                    </motion.article>
                ))}
            </div>

            <div className="mt-2 flex justify-center gap-2">
                <IconButton aria-label="left photos" onClick={() => scroll('left')} size="small" sx={{ border: '1px solid #d6d3d1', color: '#d6d3d1', '&:hover': { bgcolor: '#d6d3d1', color: '#3c3e40' } }}>
                    <ArrowBackIosNewRounded fontSize="small" />
                </IconButton>
                <IconButton aria-label="right photos" onClick={() => scroll('right')} size="small" sx={{ border: '1px solid #d6d3d1', color: '#d6d3d1', '&:hover': { bgcolor: '#d6d3d1', color: '#3c3e40' } }}>
                    <ArrowForwardIosRounded fontSize="small" />
                </IconButton>
            </div>
        </section>
    )
}