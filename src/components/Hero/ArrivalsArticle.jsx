import { useState, useEffect } from "react"

export default function ArrivalsArticle() {
  const [newArrivalImages, setNewArrivalImages] = useState([])

  async function getImages() {
    let imageData
    try {
      const rawProductsData = await fetch(
        "https://fakestoreapi.com/products?limit=2",
      )
      imageData = await rawProductsData.json()
    } catch (error) {
      console.log("error", error)
    }
    console.log(imageData)
    setNewArrivalImages(imageData)
  }

  useEffect(getImages, [])
  return (
    <article>
      <h2>New Arrival</h2>
      {newArrivalImages
        ? newArrivalImages.map((imageData, index) => (
            <div key={index}>
              <img
                src={imageData.image}
                alt="A preview image of a new arrival in the store"
              />
            </div>
          ))
        : null}
    </article>
  )
}
