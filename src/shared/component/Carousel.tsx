import { useCarouselControls } from '../../hooks/useCarouselControls';
import type { MediaRatio, Photo } from '../../interfaces/carousel.interface';
import { AnimatePresence, motion } from 'motion/react'
import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
    photosArray: Photo[];
    variant?: MediaRatio;
    aspectRatio?: number;
    className?: string;
    handlePhotoClick: (value: Photo) => void;
}

export const Carousel = ({ photosArray, variant = 'poster', aspectRatio, className = '' }: Props) => {
    const { scrollRef, ratio, desktopBasis, scroll, setActiveIndex, desktopItems, activeIndex } = useCarouselControls(variant, photosArray.length, aspectRatio);
    return (
        <section className={`w-full ${className}`} aria-label="Galería de fotos">
            <div className="group relative">
                <div
                    ref={scrollRef}
                    onScroll={(event) => {
                        const element = event.currentTarget
                        const first = element.children[0] as HTMLElement | undefined
                        if (!first) return
                        const index = Math.round(element.scrollLeft / first.offsetWidth)
                        setActiveIndex(Math.min(index, photosArray.length - 1))
                    }}
                    className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
                    aria-live="polite"
                >
                    {photosArray.map((image, index) => (
                        <motion.figure
                            key={`${image.src}-${index}`}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.04, duration: 0.35 }}
                            className={`relative min-w-0 shrink-0 snap-start basis-full sm:basis-[calc(50%-0.375rem)] ${desktopBasis}`}
                            style={{
                                ['--desktop-items' as string]: desktopItems,
                            }}
                        >
                            <div
                                className="relative overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-black/5"
                                style={{ aspectRatio: ratio }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading={index < 2 ? 'eager' : 'lazy'}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </motion.figure>
                    ))}
                </div>

                <AnimatePresence>
                    {activeIndex > 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <IconButton
                                aria-label="Fotos anteriores"
                                onClick={() => scroll(-1)}
                                className="absolute! left-3 top-1/2 -translate-y-1/2! bg-white/90! text-slate-900! shadow-lg backdrop-blur transition hover:bg-white!"
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                        </motion.div>
                    )}
                    {activeIndex < photosArray.length - 1 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <IconButton
                                aria-label="Fotos siguientes"
                                onClick={() => scroll(1)}
                                className="absolute! right-3 top-1/2 -translate-y-1/2! bg-white/90! text-slate-900! shadow-lg backdrop-blur transition hover:bg-white!"
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center justify-center-safe gap-4">
                <div className="flex gap-1.5" aria-label="Seleccionar foto">
                    {photosArray.slice(0, 8).map((image, index) => (
                        <button
                            key={`dot-${image.src}-${index}`}
                            type="button"
                            aria-label={`Ir a la foto ${index + 1}`}
                            aria-current={index === activeIndex}
                            onClick={() => {
                                setActiveIndex(index)
                                scrollRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start' })
                            }}
                            className={`h-1.5 bg-gray-50 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-foreground' : 'w-1.5 bg-border hover:bg-muted-foreground'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
