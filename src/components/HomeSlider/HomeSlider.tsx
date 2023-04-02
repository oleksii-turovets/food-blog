import { Navigation, A11y, Virtual, Autoplay, Manipulation, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import articlesArray from 'utils/articlesArray'
import HomeSliderSlide from './HomeSliderSlide'
import './HomeSlider.scss'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

type Props = {}
const HomeSlider = (props: Props) => {
    return (
        <div className="home-slider">
            <Swiper
                modules={[
                    Navigation,
                    A11y,
                    Virtual,
                    Autoplay,
                    Manipulation,
                    Controller,
                ]}
                spaceBetween={15}
                slidesPerView={1}
                centeredSlides={true}
                navigation={{
                    prevEl: '.home-slider-nav .btn-prev',
                    nextEl: '.home-slider-nav .btn-next',
                }}
                loop={true}
                loopedSlides={3}
                speed={1000}
                autoplay={{
                    delay: 10000,
                    pauseOnMouseEnter:true,
                }}
                simulateTouch={false}
            >
                {articlesArray
                    .filter((article) => article.category?.includes('featured'))
                    .map((article) => (
                        <SwiperSlide key={article.id} virtualIndex={article.id}>
                            {({ isActive }) => (
                                <HomeSliderSlide
                                    id={article.id}
                                    image={article.img}
                                    title={article.title}
                                    date={`${article.details?.date.monthName} ${article.details?.date.day}, ${article.details?.date.year}`}
                                    categoryList={article.category}
                                    isActive={isActive}
                                />
                            )}
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className="home-slider-nav">
                <Typography component={'div'} className="btn-prev">
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="icon-fa-angle-left"
                    />
                </Typography>
                <Typography component={'div'} className="btn-next">
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className="icon-fa-angle-right"
                    />
                </Typography>
            </div>
        </div>
    )
}
export default HomeSlider
