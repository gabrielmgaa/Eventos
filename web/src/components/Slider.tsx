import { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';

import { Navigation, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SliderProps {
  settings: SwiperProps,
  children: ReactNode
}

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper className="p-9" modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  )
}