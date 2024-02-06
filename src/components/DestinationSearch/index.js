// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchq: ''}

  change = event => {
    this.setState({searchq: event.target.value})
  }

  render() {
    const {searchq} = this.state
    const {destinationsList} = this.props

    const data = destinationsList.filter(ele => ele.name.includes(searchq))
    console.log(data)
    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>{' '}
        <input className="input" onChange={this.change} type="search" />
        <div className="cart">
          {data.map(element => (
            <DestinationItem Item={element} key={element.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
