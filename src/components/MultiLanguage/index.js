import {Component} from 'react'

import DisplayText from '../DisplayText'

import LanguagesTabs from '../LanguagesTabs'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultiLanguage extends Component {
  state = {Id: languageGreetingsList[0].id}

  deleteUser = id => {
    const {Id} = this.state
    this.setState({Id: id})
  }

  GetDisplayItems = () => {
    const {Id} = this.state
    const getData = languageGreetingsList.filter(each => each.id === Id)
    return getData
  }

  render() {
    const {Id, showResults} = this.state
    const FilteredDisplayResults = this.GetDisplayItems()
    return (
      <div className="main-bg">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="unordered-list">
          {languageGreetingsList.map(EachLangauge => (
            <LanguagesTabs
              EachLangauge={EachLangauge}
              deleteUser={this.deleteUser}
              key={EachLangauge.id}
              changeColor={Id === EachLangauge.id}
            />
          ))}
        </ul>
        <ul>
          {FilteredDisplayResults.map(Each => (
            <DisplayText Each={Each} key={Each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default MultiLanguage
