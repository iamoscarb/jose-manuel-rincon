import jmrDesktop from '@/assets/jmr-hero-desktop.webp';
import jmrMovil from '@/assets/jmr-hero-movil.webp';

export const HomePage = () => {
    return (
        <div>
            {/*
            1920 × 1080 px - DESKTOP
            1080 × 1920 px - MOVIL
            */}
            <picture className='w-full h-full block' id='inicio'>
                <source media='(max-width:767px)' srcSet={jmrMovil} />
                <img src={jmrDesktop} alt="Jose Manuel Rincon - Hero" className="w-full h-full object-cover" />
            </picture>

            <div className="w-full h-screen bg-blue-500" id='cine-tv'>
                <p className='text-white text-center font-bold'>Cine y TV</p>
            </div>

            <div className="w-full h-screen bg-pink-500" id='teatro'>
                <p className='text-white text-center font-bold'>Teatro</p>
            </div>

            <div className="w-full h-screen bg-green-500" id='audio-video'>
                <p className='text-white text-center font-bold'>Audio y Video</p>
            </div>

            <div className="w-full h-screen bg-yellow-500 scroll-m-25" id='medios'>
                <p className='text-white text-center font-bold pt-10 uppercase'>Medios</p>
            </div>

            <div className="w-full h-screen bg-orange-500" id='contacto'>
                <p className='text-white text-center font-bold'>Contacto</p>
            </div>
        </div>
    )
}
