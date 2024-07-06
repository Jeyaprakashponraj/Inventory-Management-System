import React from 'react';
import './Dashboard.css';
import { useState } from 'react';
import { FaRupeeSign, FaRegSmile } from "react-icons/fa";
import { CiCreditCard1, CiShoppingCart, CiCalculator1 } from "react-icons/ci";
import { FaPerson, FaUsers, FaHandshakeAngle } from "react-icons/fa6";
import { VscPercentage } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { LuCalculator } from "react-icons/lu";
import user from '../../Images/images.jpeg';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Dashboard() {
  const data = [
    { name: 'Jan', watch: 30, cloth: 23, toy: 65 },
    { name: 'Feb', watch: 22, cloth: 44, toy: 73 },
    { name: 'Mar', watch: 28, cloth: 15, toy: 32 },
    { name: 'Apr', watch: 44, cloth: 35, toy: 23 },
    { name: 'May', watch: 35, cloth: 45, toy: 20 },
    { name: 'June', watch: 62, cloth: 25, toy: 29 },
    { name: 'July', watch: 37, cloth: 17, toy: 61 },
    { name: 'Aug', watch: 28, cloth: 32, toy: 45 },
    { name: 'Sept', watch: 19, cloth: 43, toy: 93 },
    { name: 'Oct', watch: 74, cloth: 43, toy: 46 },
    { name: 'Nov', watch: 62, cloth: 43, toy: 86 },
    { name: 'Dec', watch: 90, cloth: 43, toy: 24 },
  ];
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Week', value: '1' },
    { name: 'Month', value: '2' },
    { name: 'Year', value: '3' },
  ];
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

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className='card alert-success alert'>
            <div className='d-flex align-items-center'>
              <FaRupeeSign size={40} className='bg-success rupee' />
              <div className='revenue'>
                <h5>Revenue</h5>
                <span><FaRupeeSign /> 19,645</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card alert-danger alert'>
            <div className='d-flex align-items-center'>
              <CiCreditCard1 size={40} className='bg-danger rupee' />
              <div className='revenue'>
                <h5>Expenses</h5>
                <span><FaRupeeSign />15,074</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card alert-warning alert'>
            <div className='d-flex align-items-center'>
              <FaRegSmile size={40} className='bg-warning rupee' />
              <div className='clients'>
                <h5>Happy Clients</h5>
                <span> 2000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex my-3'>
        <ButtonGroup className="mb-2">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <div>
          <input type='date' className='date' />
        </div>
      </div>
      <div className="row row-cols-3 row-cols-md-3 g-4">
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>Customers</h6>
                <h3>10,844</h3>
              </div>
              <FaPerson className='personIcon' size={40} />
            </div>
          </div>
        </div>

        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>Orders</h6>
                <h3>2493</h3>
              </div>
              <CiShoppingCart className='personIcon' size={40} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>Avg Sale</h6>
                <h3><FaRupeeSign /> 1830</h3>
              </div>
              <VscPercentage className='personIcon' size={40} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers' >
              <div className='customer'>
                <h6>Avg Item Sale</h6>
                <h3>934</h3>
              </div>
              <CiCalculator1 className='personIcon' size={40} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>Total sale</h6>
                <h3><FaRupeeSign />844</h3>
              </div>
              <LuCalculator className='personIcon color-lightblue' size={40} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>Visitors</h6>
                <h3>10000</h3>
              </div>
              <FaUsers className='personIcon' size={40} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>Total Products</h6>
                <h3>1,20,844</h3>
              </div>
              <GiShoppingBag className='personIcon' size={40} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>selling Item</h6>
                <h3>124</h3>
              </div>
              <IoStarSharp className='personIcon' size={40} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className='card'>
            <div className='container d-flex align-item-center justify-content-between customers'>
              <div className='customer'>
                <h6>Dealership</h6>
                <h3>35</h3>
              </div>
              <FaHandshakeAngle className='personIcon' size={40} />
            </div>
          </div>
        </div>
      </div>

      <div className='chart'>
        <h3 className='top'>Top Selling Product</h3>
        <BarChart width={900} height={500} data={data}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Bar dataKey="watch" stackId="a" fill="#8884d8" name="Watch" />
          <Bar dataKey="cloth" stackId="a" fill="#82ca9d" name="Cloth" />
          <Bar dataKey="toy" stackId="a" fill="#d44e15" name="Toy" />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;