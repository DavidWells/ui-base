import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import APrimative from '../../primatives/A'
import ButtonPrimative from '../../primatives/Button'
import { ButtonClass } from '../../primatives/Button'
import makeComponent from 'utils/generate-element'
import classNames from 'utils/classNames'
import styles from 'Button.css'
import config from 'Button.config'

const name = 'Button'
class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.any,
    inverse: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func
  };

  render () {
    const { className, href, icon, inverse, label, ...others} = this.props
    const element = (href) ? APrimative : ButtonPrimative
    const localizedCSS = styles[`${name}`] || styles[`${name.toLowerCase()}`]

    const classes = classNames(
      name, /* Component name */
      localizedCSS, /* Localized className */
      className /* User specified classNames */
    )

    const props = {
      ...others,
      href,
      className: classes,
      'data-react-component': name
    }

    return makeComponent(element, props, config)
  }
}


export default Button
