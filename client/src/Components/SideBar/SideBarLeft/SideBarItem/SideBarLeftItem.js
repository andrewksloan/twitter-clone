import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import './SideBarLeftItem.scss'

const SideBarLeftItem = (props) => {

  return (
    // Div that navigates to specific profile page of user
    <div className='sb-left-item'>
      <p> {props.itemName} </p>
    </div>
  )
}

export default SideBarLeftItem