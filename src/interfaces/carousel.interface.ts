export type Media = 'Serie' | 'Televisión' | 'Película' | 'Cortometraje';

export type Photo = {
    src: string
    alt: string
    year: string
    title: string
    type: Media
}
