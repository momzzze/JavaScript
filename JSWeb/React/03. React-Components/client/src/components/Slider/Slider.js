import React, { Component } from 'react'

import left from '../../resources/left.png'
import right from '../../resources/right.png'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      seletedImg: ''
    }
    this.promisfyState = obj => {
      return new Promise(res => {
        this.setState(obj, res)
      }).catch(e => {
        console.log(e)
      })
    }
  }
  componentWillReceiveProps () {
    fetch('http://localhost:9999/episodePreview/' + this.props.focusedEp)
      .then(data => {
        return data.json()
      })
      .then(parseData => {
        this.promisfyState({ seletedImg: parseData.url }).then(() => {
          console.log('loaded new state')
        })
      })
  }
  componentDidMount () {
    fetch('http://localhost:9999/episodePreview/' + this.props.focusedEp)
      .then(data => {
        return data.json()
      })
      .then(parseData => {
        this.promisfyState({ seletedImg: parseData.url }).then(() => {
          console.log('mount')
        })
      })
  }

  render () {
    return (
      <section id="slider">
        
          <img
            alt='nope'
            src={left}
            className='slider-elem slider-button case-left'
            onClick={() =>
              this.props.updateFunc(
                Number(this.props.focusedEp) - 1 < 0
                  ? 0
                  : Number(this.props.focusedEp) - 1
              )}
          />
          <img
            className='image-container'
            alt='focusedEp'
            src={this.state.seletedImg}
          />
          <img
            alt='nope'
            src={right}
            className='slider-elem slider-button case-right'
            onClick={() =>
              this.props.updateFunc(
                Number(this.props.focusedEp) + 1 > 2
                  ? 2
                  : Number(this.props.focusedEp) + 1
              )}
          />
      
      </section>
    )
  }
}

export default Slider
