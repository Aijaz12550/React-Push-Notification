import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Signup, NotificationSender} from '../components'

const NavigationManager = (props) => {
  console.log('===>',props)
  return(
    <Router>
    <Routes>
    <Route path='/' element={<Signup history={props.history}/>} />
    <Route path='/NotficationSender' element={<NotificationSender/>} />
    </Routes>
    </Router>
  )
}

export default NavigationManager
