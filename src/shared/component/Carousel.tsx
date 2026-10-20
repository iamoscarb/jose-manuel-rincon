import { motion } from 'motion/react'
import type { Photo } from '../../interfaces/carousel.interface'
import { useCarouselControls } from '../../hooks/useCarouselControls'
import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRounded from '@mui/icons-material/ArrowForwardIosRounded'
import IconButton from '@mui/material/IconButton'

interface Props {
    visible?: number;
    photosArray: Photo[];
    handlePhotoClick: (value: Photo) => void;
}

export function Carousel({ visible = 4, photosArray, handlePhotoClick }: Props) {

    let { scroll, scrollRef } = useCarouselControls(visible);

    return (
        <section className="w-full" aria-label="gallery">
            <div ref={scrollRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 bg-dark-blue!" style={{ scrollbarWidth: 'none' }}>
                {photosArray.map((photo, index) => (
                    <motion.article
                        key={index}
                        className="group relative w-[calc(100vw-40px)] min-w-[calc(100%-1rem)] snap-center overflow-hidden rounded-xl bg-stone-200 sm:min-w-[calc(50%-0.5rem)] sm:snap-start lg:min-w-[calc((100%-3rem)/4)] group"
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                        <div className="aspect-4/5 overflow-hidden bg-transparent!">
                            <img src={photo.src} alt={photo.alt} className="size-full object-cover transition duration-700 group-hover:scale-103" onClick={() => handlePhotoClick(photo)} />
                        </div>
                        <span className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-900 opacity-0 group-hover:opacity-100 transition-all! duration-150! ease-in-out!">{photo.type}</span>
                    </motion.article>
                ))}
            </div>

            <div className="mt-2 flex justify-center md:justify-end gap-2">
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