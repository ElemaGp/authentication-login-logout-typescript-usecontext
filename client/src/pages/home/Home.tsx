import { Button } from '@mui/material'
import React from 'react'
import { useContext } from "react";
import { logout } from '../../components/authContext/AuthActions';
import { AuthContext } from '../../components/authContext/AuthContext';
import style from "./home.module.css"

const Home = () => {

  const {dispatch} = useContext(AuthContext);

  const handleClick = () => {
      if (dispatch){
      dispatch(logout())
      }
  }

  return (
      <div className={style.homeContainer}>
          <p className={style.homeTextStyling}>IK, welcome to the homepage</p>
          <div className={style.homeBtn}>
            <Button variant='contained' size='large' color='secondary' sx={{textAlign:'center'}} onClick={handleClick}>LOGOUT</Button>
          </div>
      </div>
  )
}

export default Home