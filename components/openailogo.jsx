import React from 'react'
import SvgIcon from '@mui/material/SvgIcon'

const OpenAiIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 96 96" style={{ width: '96px', height: '96px' }}>
    <image
      href={props.image || '/agent.png'}
      x="0"
      y="0"
      width="96"
      height="96"
    />
  </SvgIcon>
  )
}

export default OpenAiIcon