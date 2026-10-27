export type Media = 'Serie' | 'Televisión' | 'Película' | 'Cortometraje';
export type MediaRatio = 'poster' | 'portrait' | 'square' | 'landscape' | 'thumbnail';

export type configVariant = {
    ratio: number
    desktopItems: number
    label: string
}

export type Photo = {
    src: string
    alt: string
    year: string
    title: string
    type: Media
}