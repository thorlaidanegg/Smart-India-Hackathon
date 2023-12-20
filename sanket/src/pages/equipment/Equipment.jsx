import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './equipment.scss'
import Datatable2 from '../../components/datatable2/Datatable2'

const Equipment = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable2/>
      </div>
    </div>
  )
}

export default Equipment