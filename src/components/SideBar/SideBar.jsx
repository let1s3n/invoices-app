import React from 'react'
import './SideBar.scss'
import {Col} from 'react-bootstrap'
const SideBar = () => {
  return (
    <div className="sidebar position-relative">
      <div className="sidebar__logo"></div>
      <div className="sidebar__divider position-absolute"></div>
    </div>
  )
}

export default SideBar
