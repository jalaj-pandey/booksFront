import Navbar from '../components/Navbar'
import React, { useState } from 'react'
import QRCode from 'react-qr-code';

const BuyNow = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        mobileNumber: '',
        Tid: '',
        qrCode: 'https://swap-book.netlify.app/',
      });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const address = form.address.value;
        const mobileNumber = form.mobileNumber.value;
        const Tid = form.Tid.value;
        
        
        const ckdata = {
            fullName,email,address,mobileNumber,Tid
          }
        
        try {
<<<<<<< HEAD
          const response = await fetch('http://localhost:5000/api/checkout', {
=======
          const response = await fetch('https://bookswap-4zmq.onrender.com/api/checkout', {
>>>>>>> 011d601e4638ee1a54fba75e4da82433f7134ac2
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ckdata),
          });
    
          if (response.ok) {
<<<<<<< HEAD
            alert('Form submitted successfully!');
=======
            alert('The Seller will contact you soon!');
>>>>>>> 011d601e4638ee1a54fba75e4da82433f7134ac2
          } else {
            console.error('Error submitting form:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
    
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
<<<<<<< HEAD
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Implement your checkout logic here
    //     console.log('Form submitted:', formData);
    //   };
=======
>>>>>>> 011d601e4638ee1a54fba75e4da82433f7134ac2

  return (
    <>
    <div><Navbar/></div>
    <div className='mt-24 px-4 lg:px-24'>
    <div className="container mx-auto p-4 sm:p-8">
      <h2 className="text-3xl text-center font-semibold mb-6 text-rose-600">Checkout</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-4">
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            required
          />
        </label>

        <label className="block mb-4">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            required
          />
        </label>

        <label className="block mb-4">
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            required
          />
        </label>

        <label className="block mb-4">
          Mobile Number:
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
            required
          />
        </label>

        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full sm:w-1/2 px-2 mb-4">
          <label className="block">
              Make Payment:
              <div className="flex items-center">
                
                <QRCode value={formData.qrCode} className="ml-2" />
              </div>
            </label>
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <label className="block">
              Transaction ID:
              <input
                type="text"
                name="Tid"
                value={formData.Tid}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
                required
              />
            </label>
          </div>
        </div>

        <button type="submit" className="bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700">
          Place Order
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

<<<<<<< HEAD
export default BuyNow
=======
export default BuyNow
>>>>>>> 011d601e4638ee1a54fba75e4da82433f7134ac2
