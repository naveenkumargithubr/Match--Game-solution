import './index.css'

const imageCard = props => {
  const {imageDetails} = props
  const {thumbnailUrl} = imageDetails

  return (
    <li>
      <button type="button" className="thumbnail-button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default imageCard
