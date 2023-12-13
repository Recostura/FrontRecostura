import "../css/AutoCarousel.scss";
import { carouselDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoCarousel() {
    return(
        <div className= "carousel-container">
            <div className="carousel-track">
                {Object.keys(carouselDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl= {carouselDetails[detailKey].imgUrl}
                            imgTitle={carouselDetails[detailKey].title}
                        />
                    );
                })}
                 {Object.keys(carouselDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl= {carouselDetails[detailKey].imgUrl}
                            imgTitle={carouselDetails[detailKey].title}
                        />
                    );
                })}
            </div>
        </div>
    );
}