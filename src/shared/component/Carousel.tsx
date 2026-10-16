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
        src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VgqyPykDWf82mdn8vfkmMHjvIGSdIE.png',
        alt: 'Hamburguesa artesanal con queso fundido',
        eyebrow: '01 / 06',
        title: 'Classic melt',
    },
    {
        src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
        alt: 'Hamburguesa doble con queso',
        eyebrow: '02 / 06',
        title: 'Double stack',
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
        <section className="w-full" aria-label="Galería destacada">
            {/*<div className="mb-7 flex items-end justify-between gap-4">
                <div className="hidden gap-2 sm:flex">
                    <IconButton aria-label="Ver fotos anteriores" onClick={() => scroll('left')} size="small" sx={{ border: '1px solid #d6d3d1', color: '#292524' }}>
                        <ArrowBackIosNewRounded fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="Ver más fotos" onClick={() => scroll('right')} size="small" sx={{ border: '1px solid #d6d3d1', color: '#292524' }}>
                        <ArrowForwardIosRounded fontSize="small" />
                    </IconButton>
                </div>
            </div>*/}

            <div ref={scrollRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
                {photos.map((photo, index) => (
                    <motion.article
                        key={`${photo.title}-${index}`}
                        className="group relative min-w-[calc(100%-1rem)] snap-start overflow-hidden rounded-2xl bg-stone-200 sm:min-w-[calc(50%-0.5rem)] lg:min-w-[calc((100%-3rem)/4)]"
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <div className="aspect-4/5 overflow-hidden">
                            <img src={photo.src} alt={photo.alt} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/20 to-transparent p-5 pt-20 text-white">
                            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">{photo.eyebrow}</p>
                            <h3 className="font-serif text-2xl">{photo.title}</h3>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div className="mt-2 flex justify-center gap-2 sm:hidden">
                <IconButton aria-label="Ver fotos anteriores" onClick={() => scroll('left')} size="small" sx={{ border: '1px solid #d6d3d1', color: '#292524' }}>
                    <ArrowBackIosNewRounded fontSize="small" />
                </IconButton>
                <IconButton aria-label="Ver más fotos" onClick={() => scroll('right')} size="small" sx={{ border: '1px solid #d6d3d1', color: '#292524' }}>
                    <ArrowForwardIosRounded fontSize="small" />
                </IconButton>
            </div>
        </section>
    )
}