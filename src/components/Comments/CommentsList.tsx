import TitleWithLinesAround from 'components/TitleWithLinesAround/TitleWithLinesAround'
import Comment from './Comment'
import { useAppSelector } from 'redux/hooks'
import { ArticleComment } from 'redux/commentsReducer'
import './CommentsList.scss'
import { Typography } from '@mui/material'
import {
    Navigation,
    Pagination,
    A11y,
    Virtual,
    Autoplay,
    Manipulation,
    Controller,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

type Props = {
    id: number
}
const CommentsList = ({ id }: Props) => {
    const commentsArray: ArticleComment[] = useAppSelector(
        (state) => state.articlesComments[id]
    )
    const commentsNumber = commentsArray.length

    return (
        <div className="comments-list">
            <TitleWithLinesAround>{`${commentsNumber} comment${
                commentsNumber > 1 ? 's' : ''
            }`}</TitleWithLinesAround>
            {commentsNumber === 0 ? (
                <Typography
                    component={'p'}
                    variant="body1"
                    color={'text.secondary'}
                    align="center"
                >
                    There is no comment yet. Be the first who break the silence!
                </Typography>
            ) : (
                <div className="comments-wrapper-slider">
                    <Swiper
                        modules={[
                            Navigation,
                            Pagination,
                            A11y,
                            Virtual,
                            Autoplay,
                            Manipulation,
                            Controller,
                        ]}
                        autoHeight={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        speed={1000}
                        autoplay={{
                            delay: 10000,
                            pauseOnMouseEnter: true,
                        }}
                        simulateTouch={true}
                    >
                        {commentsArray.map((comment, index) => (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <Comment comment={comment} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}
export default CommentsList
