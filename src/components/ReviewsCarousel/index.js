// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onLeftArrow = () => {
    this.setState(prev => {
      if (prev.count === 0) {
        return {count: 0}
      }
      return {count: prev.count - 1}
    })
  }

  onRightArrow = () => {
    this.setState(prev => {
      if (prev.count < 3) {
        return {count: prev.count + 1}
      }
      return {count: 3}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="back">
        <h1>Reviews</h1>

        <button type="button" onClick={this.onLeftArrow}>
          <img
            alt="left arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
          />
        </button>
        <img value={username} alt={username} src={imgUrl} />
        <p>
          {username} {companyName} {description}{' '}
        </p>

        <button type="button" onClick={this.onRightArrow}>
          <img
            alt="right arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
