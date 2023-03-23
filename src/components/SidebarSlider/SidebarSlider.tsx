import { Navigation, A11y, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import articlesArray from 'utils/articlesArray'
import SidebarSliderSlide from './SidebarSliderSlide'
import './SidebarSlider.scss'
import { Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

type Props = {}
const SidebarSlider = (props: Props) => {
    return (
        <Swiper
            className="sidebar-slider"
            modules={[Navigation, A11y, Virtual]}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
                450: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                970: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            }}
            navigation={{
                prevEl: '.sidebar-slider-nav .btn-prev',
                nextEl: '.sidebar-slider-nav .btn-next',
            }}
            virtual
            loop={true}
            speed={1000}
            autoplay={{ delay: 5000 }}
        >
            {articlesArray
                .filter((article) => article.category?.includes('featured'))
                .map((article) => (
                    <SwiperSlide key={article.id} virtualIndex={article.id}>
                        <SidebarSliderSlide
                            id={article.id}
                            image={article.img}
                            title={article.title}
                        />
                    </SwiperSlide>
                ))}
            <div className="sidebar-slider-nav">
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
        </Swiper>
    )
}
export default SidebarSlider
