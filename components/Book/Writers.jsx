import React from 'react'
import {Writer} from './Writer'
import {WRITERS_VALUES} from './writers-values'

export const Writers = () => {
  const getMultipleFive = () => {}

  return (
    <section id="writers" className="flex flex-col flex-1">
      <div className="flex flex-col items-center justify-center p-10">
        <span className="text-3xl font-semibold text-primary font-montserrat">
          Escritoras
        </span>
        <div className="flex flex-col flex-wrap justify-center p-8 sm:flex-row">
          {Object.values(WRITERS_VALUES).map(writer => (
            <Writer
              image={writer.image}
              name={writer.name}
              linkedin={writer.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
