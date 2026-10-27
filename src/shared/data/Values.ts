import type { configVariant, MediaRatio } from "../../interfaces/carousel.interface";

export const DesktopBreakpoint: string = '(min-width:770px)';
export const aspectRatios: Record<MediaRatio, configVariant> = {
    landscape: { ratio: 4 / 3, desktopItems: 3, label: 'Landscape' },
    portrait: { ratio: 4 / 5, desktopItems: 3, label: 'Portrait' },
    poster: { ratio: 3 / 4, desktopItems: 4, label: 'Poster' },
    square: { ratio: 1, desktopItems: 4, label: 'Cuadrado' },
    thumbnail: { ratio: 4 / 3, desktopItems: 3, label: 'Thumbnail' },
}