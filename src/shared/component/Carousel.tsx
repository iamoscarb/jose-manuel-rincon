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

const photos: Photo[] = [
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91SnCfQhhT-EeI-9MnAyWcAxVLrSgoZf5hXxyxqPxEto52rBy0Y2Vr2eB&s=10',
        alt: 'Hamburguesa artesanal con queso fundido',
        eyebrow: '01 / 06',
        title: 'Te Esperaba',
    },
    {
        src: 'https://images.vix.com/prd/videos/video:mcp:4770026/8f6800228219c3d535ea622a960d016c',
        alt: 'Hamburguesa doble con queso',
        eyebrow: '02 / 06',
        title: 'Domenica Montero',
    },
    {
        src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85',
        alt: 'Hamburguesa con lechuga y tomate',
        eyebrow: '03 / 06',
        title: 'Green room',
    },
    {
        src: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85',
        alt: 'Hamburguesa con vegetales frescos',
        eyebrow: '04 / 06',
        title: 'House favorite',
    },
    {
        src: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85',
        alt: 'Hamburguesa con papas fritas',
        eyebrow: '05 / 06',
        title: 'Late night',
    },
    {
        src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=85',
        alt: 'Hamburguesa gourmet sobre una mesa',
        eyebrow: '06 / 06',
        title: 'The special',
    },
]

export function Carousel({ visible = 4 }: { visible?: number }) {
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
                {photos.map((photo, index) => (
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