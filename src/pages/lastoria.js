import { StaticImage } from "gatsby-plugin-image"
import React from "react"

// Components
import Layout from "../components/Layout"

function LaStoria({ location }) {
  return (
    <>
      <Layout pageTitle="La Storia" location={location}>
        <div className="lastoria">
          <div className="lastoria__title-wrapper">
            <div className="lastoria__title text--page-title">La Storia</div>
            <StaticImage
              className="ticket left"
              src="../images/ticket-roma.jpg"
              alt="plane ticket"
            />
            <StaticImage
              className="ticket right"
              src="../images/ticket-pisa.jpg"
              alt="plane ticket"
            />
          </div>
          <div className="lastoria__story text--md">
            <p>
              Bragazzi’s opened in Sheffield in 2003 and is owned by Matteo
              Bragazzi. Bragazzi’s is an outlier and safe haven for people who
              enjoy the “qualcosa in più“.
            </p>
            <p>
              Matteo has a brother, Dino, they often holiday together. In Rome
              one evening, enjoying a Shakerato, Matteo’s mind drifted. Sorry to
              see him this way, Dino started up a monologue on their family
              history of Italian dining in London. Their father had come over,
              like so many others, and made a business of selling food.
            </p>
            <p>
              As Dino reached a point about the Corradi brothers, Matteo
              recognised his fate as the same. And so, the bet was placed over a
              plastic table, outside a bar in Fiano Romano on that hot evening
              in 2002. They did a big shop with help from Zia Maria and floated
              it to England, ready for the cafe to come.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default LaStoria
