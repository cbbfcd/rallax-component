import React, { Component } from 'react'
import PropTypes from 'prop-types'
import rallax from 'rallax.js'

export default class Rallax extends Component {
  static propTypes = {
    options: PropTypes.shape({
      speed: PropTypes.number,
      mobilePx: PropTypes.number
    }),
    when: PropTypes.arrayOf(PropTypes.shape({
      condition: PropTypes.func,
      action: PropTypes.func
    })),
    child: PropTypes.bool.isRequired
  }

  static defaultProps = {
    options: {
      speed: 0.3,
      mobilePx: 0
    },
    child: false
  }

  componentDidMount(){
    const { options, when, child } = this.props
    if(child){
      this.parallax = rallax(this.target.children[0], options)
    }else{
      this.parallax = rallax(this.target, options)
    }
    if(when && when.length){
      when.forEach(({condition, action}) => {
        this.parallax.when(condition, () => action(this.parallax))
      })
    }
  }

  render() {
    const {
      children, className
    } = this.props

    return (
      <div 
        className={ className } 
        ref={ ele => this.target = ele }
      >
        { React.Children.only(children) }
      </div>
    )
  }
}
