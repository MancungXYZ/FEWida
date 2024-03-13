import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Invoice() {

    const [orders, setOrders] = useState({})

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/orders')
                .then(res => {
                    setOrders(res.data[0]);
                })
            } catch (error) {
                console.log(error)
            }
        }
        getOrders()
      }, [])

      let sum = orders.products?.reduce(function(prev, current) {
        return prev + +current.price
      }, 0);
      
      let pajak = 10/100 * sum;

      let grandPrice = pajak + sum;
      
    return (
    <section className="bg-white py-20">
      <div className="max-w-2xl mx-auto py-0 md:py-16">
        <article className="shadow-none md:shadow-xl md:rounded-md overflow-hidden">
          <div className="md:rounded-b-md bg-neutral-500">
            <div className="p-9 border-b border-gray-200">
              <div className="space-y-6">
                <div className="flex justify-between items-top">
                  <div className="space-y-4">
                    <div>
                      <img className="h-6 object-cover mb-4" src="https://media.licdn.com/dms/image/C560BAQEeC5qL9eYg5w/company-logo_200_200/0/1630662505930/widatech_logo?e=2147483647&v=beta&t=aK9Gn8f5nY4Ew0iQbM8tOOnsP_-Buffnbv6h-jg7rqc" />
                      <p className="font-bold text-lg text-black"> Invoice </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-black"> Billed To </p>
                      <p className='text-black'> {orders.customer} </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-black"> Sales Person </p>
                      <p className='text-black'> {orders.salesPerson} </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-sm text-black"> Invoice Number </p>
                      <p className='text-black'> {orders.noInvoice} </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-black"> Invoice Date </p>
                      <p className='text-black'> {orders.date} </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-black"> Payment Type </p>
                      <p className='text-black'> {orders.paymentType} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-9 border-b border-gray-200">
              <p className="font-medium text-sm text-black"> Note </p>
              <p className="text-sm text-gray-500"> {orders.notes} </p>
            </div>
            <table className="w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr>
                  <th scope="col" className="px-9 py-4 text-left font-semibold text-black"> Item </th>
                  <th scope="col" className="py-3 text-left font-semibold text-black">  </th>
                  <th scope="col" className="py-3 text-left font-semibold text-black"> Quantity </th>
                  <th scope="col" className="py-3 text-left font-semibold text-black"> Harga </th>
                  <th scope="col" className="py-3 text-left font-semibold text-black"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.products?.map(product => (
                <tr key={product._id}>
                    <td className="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                    <div>
                      <p className="text-sm text-gray-400"> {product.item} </p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-gray-600 truncate"></td>
                  <td className="whitespace-nowrap text-gray-600 truncate"> {product.quantity} </td>
                  <td className="whitespace-nowrap text-gray-600 truncate"> Rp {product.price} </td>
                </tr>
                  ))}
              </tbody>
            </table>

              <div className="p-9 border-b border-gray-200">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 text-sm"> Subtotal </p>
                  </div>
                  <p className="text-gray-500 text-sm"> Rp {sum} </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 text-sm"> Tax </p>
                  </div>
                  <p className="text-gray-500 text-sm"> Rp {pajak} </p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-500 text-sm"> Total </p>
                  </div>
                  <p className="text-gray-500 text-sm"> Rp {grandPrice} </p>
                </div>
              </div>
            </div>
            <div className="p-9 border-b border-gray-200">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-black text-lg"> Total Price </p>
                  </div>
                  <p className="font-bold text-black text-lg"> Rp {grandPrice} </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
    )
}

export default Invoice