import React from 'react'
import "./list.scss"
import Sidebar from '/Users/kritimathur/Desktop/Web Development /E-commerce/my-app/src/components/sidebar/Sidebar'
import Navbar from '/Users/kritimathur/Desktop/Web Development /E-commerce/my-app/src/components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

export const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}
export default List
