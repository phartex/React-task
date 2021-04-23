import React from 'react'
import './Nav.css'
import Activity from './Activity'
import Icon from './Icon'

const Main = () => {
    return (
        <body>
        <nav>
            <button>LOGO</button>
            <div className='icons'>
            <i className="icon fas fa-user-circle"></i>
            <i className="icon fas fa-bell"></i>
            </div>

        </nav>
        <div className='balance text-center'>
            <ul>
                <li>WALLET BALANCE:</li>
                <li>TOKEN BALANCE:</li>
                <li>NAIRA BALANCE:</li>
            </ul>
        </div>
        <div className='currency'>
            <p className='text-primary'>Select Currency:</p>
            <p><span className='token'>TOKEN</span> 0.00000001</p>
        </div>
        <div className='buttons'>
            <button className='button bg-primary text-light'>SEND</button>
            <button className='button bg-primary text-light'>RECIEVE</button>
        </div>
        <div className='date'>
            <p>Recent Activity</p>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                <tr>
                    <td>1/1/21</td>
                    <td>Sent</td>
                    <td>N100.00</td>
                </tr>
                <tr>
                    <td>2/2/21</td>
                    <td> Received</td>
                    <td>N200.00</td>
                </tr>
                <tr>
                    <td>3/3/21</td>
                    <td>Sent</td>
                    <td>N300.00</td>
                </tr>
                
            </table>

        </div>
        <div className='icon'>
        <Icon />
        </div>
        
        </body>
        
    )
}

export default Main
