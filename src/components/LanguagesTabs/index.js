import {Component} from 'react'

import './index.css'

class LanguagesTabs extends Component {
  render() {
    const {EachLangauge, deleteUser, changeColor} = this.props
    const {id, buttonText} = EachLangauge
    const changeNow = () => {
      deleteUser(id)
    }
    const buttonStyle = changeColor ? 'normal' : null
    return (
      <ul className="li">
        <li className="li">
          <button
            type="button"
            onClick={changeNow}
            className={`buttons ${buttonStyle}`}
          >
            {buttonText}
          </button>
        </li>
      </ul>
    )
  }
}
export default LanguagesTabs
