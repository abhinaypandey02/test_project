// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
type Data = {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { contact } = req.body
  if (!contact) {
    res.status(400)
    return
  }
  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'abhinaypandey02@gmail.com',
      pass: process.env.NEXT_OUTLOOK_PASSWORD,
    },
  })
  try {
    await transporter.sendMail({
      from: '"Abhinay Pandey" <abhinaypandey02@gmail.com>', // sender address
      to: contact.email, // list of receivers
      subject: 'Thanks for signing up!', // Subject line
      text: `Hello ${contact.first_name} ${contact.last_name}! Thanks for signing up! ${
        contact.opt_in
          ? 'Thanks for opting in for newsletter'
          : 'Please consider opting in for newsletter!'
      }. Your invoice will be sent to ${contact.state}, ${contact.country}. Your phone number is ${
        contact.phone
      }`, // plain text body
      html: `<div>Hello <h1>${contact.first_name} ${
        contact.last_name
      }</h1>! Thanks for signing up! ${
        contact.opt_in
          ? 'Thanks for opting in for newsletter'
          : 'Please consider opting in for newsletter!'
      }. Your invoice will be sent to <i>${contact.state}, ${
        contact.country
      }</i>. Your phone number is <a href="tel:${contact.phone}">${contact.phone}</a> </div>`, // html body
    })
    res.send(200)
  } catch (e) {
    res.json({ error: e })
  }
}
