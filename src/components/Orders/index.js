import React, { Component } from 'react';
import SideNavbar from '../SideNavbar';
import './index.css'; // Import your custom CSS (optional)

const ordersData = [
  // Replace with your actual static order data
   {
    orderId: "ORD-001",
    orderItem: "Headphones",
    deliveryDate: "2024-03-20",
    orderAddress: "No. 42, Sunny Street, Bangalore, Karnataka 560001, India",
    totalAmount: 1599.00,
  },
  {
    orderId: "ORD-002",
    orderItem: "Wireless Mouse",
    deliveryDate: "2024-03-18",
    orderAddress: "Flat 203, Building C, Sector 17, Gurgaon, Haryana 122001, India",
    totalAmount: 499.00,
  },
  {
    orderId: "ORD-003",
    orderItem: "T-Shirt (XL)",
    deliveryDate: "2024-03-22",
    orderAddress: "12th Main Road, Ashok Nagar, Chennai, Tamil Nadu 600088, India",
    totalAmount: 399.00,
  },
  {
    orderId: "ORD-004",
    orderItem: "Laptop Bag",
    deliveryDate: "2024-03-19",
    orderAddress: "Plot No. 10, Royal Enclave, Kondhwa, Pune, Maharashtra 411048, India",
    totalAmount: 899.00,
  },
  {
    orderId: "ORD-005",
    orderItem: "Smartwatch",
    deliveryDate: "2024-03-25",
    orderAddress: "B-101, Galaxy Apartments, Rajendra Nagar, Hyderabad, Telangana 500080, India",
    totalAmount: 5999.00,
  },
  {
    orderId: "ORD-006",
    orderItem: "Sneakers (Size 10)",
    deliveryDate: "2024-03-21",
    orderAddress: "3rd Floor, Everest Apartments, Navrangpura, Ahmedabad, Gujarat 380006, India",
    totalAmount: 1299.00,
  },
  {
    orderId: "ORD-007",
    orderItem: "Wireless Keyboard",
    deliveryDate: "2024-03-17",
    orderAddress: "House No. 24, Shanti Nagar, Bhubaneswar, Odisha 751003, India",
    totalAmount: 799.00,
  },
  {
    orderId: "ORD-008",
    orderItem: "Jeans (Size 32)",
    deliveryDate: "2024-03-23",
    orderAddress: "Flat No. 502, Crystal Towers, Sector 44, Noida, Uttar Pradesh 201301, India",
    totalAmount: 999.00,
  },
  {
    orderId: "ORD-009",
    orderItem: "Gaming Mouse",
    deliveryDate: "2024-03-24",
    orderAddress: "1st Main Road, Koramangala, Bangalore, Karnataka 560034, India",
    totalAmount: 1999.00,
  },
  {
    orderId: "ORD-010",
    orderItem: "Dress (Size M)",
    deliveryDate: "2024-03-20",
    orderAddress: "C-21, Royal Gardens, Sector 70, Mohali, Punjab 160055, India",
    totalAmount: 749.00,
  },
];

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: ordersData,
      filteredOrders: ordersData,
      selectedDate: null,
    };
  }

   handleDateChange = (event) => {
    const selectedDate = event.target.value;
    this.setState({ selectedDate });

    if (selectedDate) {
      const filtered = this.state.orders.filter((order) => order.deliveryDate === selectedDate);
      this.setState({ filteredOrders: filtered });
    } else {
      this.setState({ filteredOrders: this.state.orders }); // Show all orders if no date selected
    }
  };

  render() {
    const { filteredOrders, selectedDate } = this.state;

    return (
    <div className='common-container'>
        <SideNavbar />
        <div className="orders-container">
            <h1 className='orders-heading'>Orders</h1>
            <div className='orders-sub-container'>
                 <div className="calender-container">
                    <label htmlFor="filter-date">Delivery Date:</label>
                    <input type="date" id="filter-date" value={selectedDate} onChange={this.handleDateChange} />
                </div>
                <table className='orders-table'>
                    <thead >
                        <tr>
                        <th className='order-table-header'>Order ID</th>
                        <th className='order-table-header'>Order Name</th>
                        <th className='order-table-header'>Order Address</th>
                        <th className='order-table-header'>Delivery Date</th>
                        <th className='order-table-header'>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.orderItem}</td>
                            <td>{order.orderAddress}</td>
                            <td>{order.deliveryDate}</td>
                            <td>{order.totalAmount}/-</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            
        </div>
    </div>
      
    );
  }
}


export default Orders;
