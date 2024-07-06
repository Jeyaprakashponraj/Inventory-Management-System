import React from 'react'
import user from '../../Images/images.jpeg';
import { FaSearch } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

function UserDashboard() {
  return (
    <div className='dashboard'>
      <div className='d-flex'>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className='d-flex user'>
          <div>
            <h5>Jeyaprakash</h5>
            <p>Admin Profile</p>
          </div>
          <img src={user} alt='user' width={55} height={55} className='admin' />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className='card1 alert-danger alert'>
            <div className='d-flex align-items-center userD'>
              <CiShoppingCart className='bg-danger rupee' size={50} />
              <div className='revenue'>
                <h4>Total Products</h4>
                <h6>1</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card1 alert-success alert'>
            <div className='d-flex align-items-center userD'>
              <FaRupeeSign size={50} className='bg-success rupee' />
              <div className='revenue'>
                <h4>Total Store Values</h4>
                <h6> 2000</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Inventory Items</h2>
        <table>
          <thead>
            <tr>
              <th>s/n</th>
              <th>Product-Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Watch</td>
              <td>200</td>
              <td>2</td>
              <td>2000</td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserDashboard
