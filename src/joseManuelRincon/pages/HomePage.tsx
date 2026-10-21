import jmrDesktop from '@/assets/jmr-hero-desktop.webp';
import jmrMovil from '@/assets/jmr-hero-movil.webp';
import { MoviesAndTvPage } from './MoviesAndTvPage';
import { CustomBox } from '../../shared/component/CustomBox';
import { TheaterPage } from './TheaterPage';
import { AudioVideoPage } from './AudioVideoPage';
import { MediaPage } from './MediaPage';
import { ContactPage } from './ContactPage';

export const HomePage = () => {
    return (
        <>
            {/*
            1920 × 1080 px - DESKTOP
            1080 × 1920 px - MOVIL
            */}
            <picture className='w-full h-full block' id='inicio'>
                <source media='(max-width:767px)' srcSet={jmrMovil} />
                <img src={jmrDesktop} alt="Jose Manuel Rincon - Hero" className="w-full h-full object-cover" loading='lazy' />
            </picture>

            <CustomBox id='cine-tv' className='pb-0!'>
                <MoviesAndTvPage />
            </CustomBox>

            <CustomBox id='teatro' className='pb-0!'>
                <TheaterPage />
            </CustomBox>

            <CustomBox id='audio-video' className='pb-0!'>
                <AudioVideoPage />
            </CustomBox>

            <CustomBox id='medios' className='pb-0!'>
                <MediaPage />
            </CustomBox>

            <CustomBox id='contacto'>
                <ContactPage />
            </CustomBox>
        </>
    )
}
