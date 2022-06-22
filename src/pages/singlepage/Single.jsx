import "./single.scss"
import Sidebar from "/Users/kritimathur/Desktop/Web Development /E-commerce/my-app/src/components/sidebar/Sidebar.jsx"
import Navbar from "/Users/kritimathur/Desktop/Web Development /E-commerce/my-app/src/components/navbar/Navbar.jsx"
import Chart from "/Users/kritimathur/Desktop/Web Development /E-commerce/my-app/src/components/chart/Chart"
import List from "/Users/kritimathur/Desktop/Web Development /E-commerce/my-app/src/components/table/Table"
export const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">edit</div>
            <h1 className="title">Infromation</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/7882737/pexels-photo-7882737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 82 73 64 55</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Rajiv Chowk</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <h1 className="title"></h1>
          <Chart aspect={3/1} title="User Spending" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
