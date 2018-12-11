import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

export class LinkButton extends React.Component {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props
  return (
    <button {...rest}
            onClick={(event) => {
              onClick && onClick(event)
              history.push(to)
            }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)