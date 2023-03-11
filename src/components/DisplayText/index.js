import {Component} from 'react'

import './index.css'

class DisplayText extends Component {
  render() {
    const {Each} = this.props
    const {imageUrl, imageAltText} = Each
    return (
      <li className="li">
        <img src={imageUrl} alt={imageAltText} className="images" />
      </li>
    )
  }
}
export default DisplayText
