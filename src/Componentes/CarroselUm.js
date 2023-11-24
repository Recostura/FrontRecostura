import Style from "../css/CarroselUm.module.css";
import "@splidesjs/react-splide/css";
import { Options, Splide, SplideSlide }
    from "@splidejs/react-splide";

    const options: Options = {
        perPage: 2,
        arrows: false,
        pagination: false,
    };

    const slides = [
        { icon:"build", text: "Building...", },
        ...
    ];

    export const Carousel = () => (
        <div className={Style.wrapper}>
            <div className={Style.splide}>
                <Splide options={options}>
                    {slides.map((slide) => (
                        <SplideSlide>
                            <div className={Style.slide}>
                                <div className={Style.card}>
                                    <span>
                                        {slide.icon}
                                    </span>
                                    <p>{slide.text}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ) )}
                </Splide>
            </div>
        </div>
    );