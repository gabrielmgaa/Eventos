import { FormEvent, useState } from 'react'

import axios from 'axios'

interface WarningProps {
  msg: string
}

export function Form() {

  const [warning, setWarning] = useState<WarningProps>({ msg: "" })
  const [name, setName] = useState("")
  const [events, setEvents] = useState("")
  const [people, setPeople] = useState("")

  async function handleCreateEvent(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    try {
      await axios.post('http://localhost:3000/event/create', {
        "name": data.name,
        "people": Number(data.people),
        "eventsDetails": data.eventsDetails
      })
        .then(res => clearFields())
        .catch(error => setWarning(error.response.data))
      

    } catch (err) {
      console.log(err);
    }
  }

  function clearFields() {
    setName("")
    setPeople("")
    setEvents("")
    warning.msg = ""
  }

  return (
    <div className="max-w-[550px] m-auto w-[90%] bg-white -translate-y-16 p-5 rounded">
      <div className="box m-auto w-[90%]">
        <h2 className="text-2xl font-medium">Informações do Evento</h2>

        <form onSubmit={handleCreateEvent}>
          <div className="flex flex-col gap-2 mt-6 mb-4">
            <span className="font-light">Nome do Evento</span>
            <input
              className="border-[1px] rounded border-black p-2 focus:border-[#C74040] 
                outline-none placeholder:text-input-light/60 font-light"
              type="text"
              name="name"
              id="name"
              placeholder="RSXP"
              minLength={4}
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="flex flex-col gap-2 mt-6 mb-4">
            <div className="flex gap-1">
              <span className="font-light">Quantas Pessoas?</span>
              <span className="text-input-light/60 font-light">( Quantidade Máxima )</span>
            </div>
            <input
              className="border-[1px] rounded border-black p-2 focus:border-[#C74040] 
                outline-none placeholder:text-input-light/60 font-light"
              type="number"
              name="people"
              id="people"
              placeholder="1500"
              onChange={(e) => setPeople(e.target.value)}
              value={people}
              required
              min={100}
            />
          </div>

          {/* <div className="flex flex-col gap-2 mt-6 mb-4">
            <div className="flex gap-1">
              <span className="font-light">Data do Evento</span>
              <span className="text-input-light/60 font-light">( **//**** )</span>
            </div>
            <input className="border-[1px] rounded border-black p-2 focus:border-[#C74040] 
            outline-none placeholder:text-input-light/60 font-light" type="text" name="" id="" placeholder="00/00/0000" />
          </div> */}

          <div className="flex flex-col gap-2 mt-6 mb-4">
            <div className="flex gap-1">
              <span className="font-light">Descrição do Evento</span>
              <span className="text-input-light/60 font-light">( Resumo )</span>
            </div>
            <textarea
              className="border-[1px] rounded border-black p-2 focus:border-[#C74040] 
                outline-none placeholder:text-input-light/60 font-light"
              name="eventsDetails"
              id="eventsDetails"
              placeholder="Nosso evento irá ser..."
              onChange={(e) => setEvents(e.target.value)}
              value={events}
              required
              minLength={50}
              rows={6}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-[#31E0D6] rounded mt-4"
          >Criar</button>

          {
            warning.msg === "" ? (
              null
            ) : (
              <div className="text-center mt-4 text-red-800 text-lg">{warning.msg}</div>
            )
          }
        </form>
      </div>
    </div>
  )
}