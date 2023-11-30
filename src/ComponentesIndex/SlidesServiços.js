import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import calça from '../imagens/calça.svg'
import Style from '../css/SlidesServiços.module.css';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Slide() {

    const slides = [ calça, calça, calça, calça ];

    return(
        <div className={Style.Slides}>
            <Swiper>
                {slides.map(slide => (
                    <SwiperSlide>
                        <div className={Style.CarrouseSlide}>
                            <img src={slide} alt={slides} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Slide;