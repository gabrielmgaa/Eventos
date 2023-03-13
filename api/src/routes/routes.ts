import express from "express"

import { prisma } from "../utils/prisma"
import { findEventByName } from "../services/event"
import { z } from "zod"

export const router = express.Router()

router.post('/create/', async (req, res, next) => {

  try {
    const createEventBody = z.object({
      name: z.string().min(4),
      people: z.number().min(100),
      eventsDetails: z.string().min(30),
      // date: z.string()
    })

    const {
      name,
      people,
      eventsDetails,
    } = createEventBody.parse(req.body)

    const verifyName = await findEventByName(name)
    
    if (verifyName) {
      res.status(400).json({ msg: "Nome de Evento já existente!" })
    }

    const createEvent = await prisma.event.create({
      data: {
        name,
        people,
        eventsDetails,
      }
    })

    res.status(201).json(createEvent)
  } catch (err) {
    next(err) 
  }

})

router.get('/all/', async (req, res) => {

  const getAllEvents = await prisma.event.findMany()

  res.status(200).json(getAllEvents)

})