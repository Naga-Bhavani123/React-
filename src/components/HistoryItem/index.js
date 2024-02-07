import './index.css'

const HistoryItem = props => {
  const {Item, Delete} = props
  console.log(Item)
  const {id, timeAccessed, logoUrl, title, domainUrl} = Item

  const ele = () => {
    Delete(id)
  }
  return (
    <li className="listItem">
      <div className="firstPart">
        <p className="time">{timeAccessed}</p>
        <div className="InnerFirstPart" id="set">
          <img src={logoUrl} className="image" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domainName"> {domainUrl}</p>
        </div>
      </div>
      <button
        className="button"
        type="button"
        onClick={ele}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
