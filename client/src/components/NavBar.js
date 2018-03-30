import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 15px 2.5vw;
  background: palevioletred;
`

const NavBar = () => {
  return (
    <NavStyle>
      <h1>Tunr</h1>
      <div>
        <div><Link to="/">All Artists</Link></div>
        <div><Link to="/artist/3">Test Single Artist</Link></div>
      </div>
    </NavStyle>
  )
}

export default NavBar
