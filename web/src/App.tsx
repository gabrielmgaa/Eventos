import { useEffect, useState } from 'react'
import { SwiperSlide, SwiperProps } from 'swiper/react'

import axios from 'axios'

import { Card } from './components/Card'
import { Form } from './components/Form'
import { Header } from './components/Header'

import { CardProps } from './types/Card'

import './styles/main.css'
import { Slider } from './components/Slider'

function App() {

  const [cardEvents, setCardEvents] = useState<CardProps[]>([])
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: { clickable: false },
  }

  useEffect(() => {
    axios.get('http://localhost:3000/event/all')
      .then(res => setCardEvents(res.data))
  }, [])

  return (
    <div>
      <Header />
      <Form />

      <div className="mb-20 max-w-[1200px] m-auto">
        <Slider settings={settings}>
          {
            cardEvents.map(card => {
              return (
                <SwiperSlide key={card.id}>
                  <Card
                    name={card.name}
                    people={card.people}
                    eventsDetails={card.eventsDetails}
                  />
                </SwiperSlide>
              )
            })
          }
        </Slider>

      </div>


    </div>
  )
}

export default App
