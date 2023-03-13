interface CardProps {
  name: string,
  people: number,
  eventsDetails: string,
}

export function Card({ name, people, eventsDetails }: CardProps) {

  return (
    <div className="max-w-sm max-h-[500px] h-[500px] bg-white rounded flex flex-col overflow-hidden">
      <div className="bg-header text-white font-medium flex items-center justify-center h-[100px]">
        <h3>{name}</h3>
      </div>
      <div className="p-4 text-justify flex flex-col gap-3 h-[400px] justify-between">
        <span>
          {eventsDetails}
        </span>

        <span className="font-medium content-end">
          Quantidade de Pessoas: {people}
        </span>
      </div>
    </div>
  )

}