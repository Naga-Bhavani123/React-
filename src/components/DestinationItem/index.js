// Write your code here

import './index.css'

const DestinationItem = props => {
  const {Item} = props
  const {name, imgUrl} = Item
  console.log(name)
  return (
    <div className="con">
      <img src={imgUrl} alt={name} className="image" />
      <h1 className="para">{name}</h1>
    </div>
  )
}

export default DestinationItem
