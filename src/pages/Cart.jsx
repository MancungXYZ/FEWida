import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, getTotals, removeFromCart, decreaseCart } from '../redux/cartSlice'
import axios from 'axios'
import moment from 'moment'

moment.locale('id'); 

function Cart() {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const pajak = (10/100)*cart.cartTotalAmount;
  const total = pajak + cart.cartTotalAmount;

  const handlePesanan = () => {
    const [name, setName] = useState('')
    const [sales, setSales] = useState('')
    const [note, setNote] = useState('')

    try {
      const res = axios({
        url: "http://localhost:5000/api/orders/addorder",
        method: "POST",
        data: {
          customer: name,
          salesPerson: sales,
          note: note,
          paymentType: "CASH",
          date: moment().format('LL'),
        }
      })
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
    <div class="flex flex-col items-center bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    </div><div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">Order Summary</p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart.cartItems?.map((item) => (
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
              <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.img} alt="" />
                <div class="flex w-full flex-col px-4 py-4">
                  <span class="font-semibold">{item.item}</span>
                  <p class="text-lg font-bold">Rp {item.totalCogs}</p>
                  <div class="sm:order-1">
                          <div class="mx-auto flex h-8 items-stretch text-gray-600">
                            <button onClick={() => handleDecreaseCart} class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-blackgood border">-</button>
                            <div class="flex items-center justify-center bg-gray-100 px-4 text-xs uppercase transition border">1</div>
                            <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-blackgood border">+</button>
                          </div>
                  </div>
                </div>
            </div>
              ))}
          </div>

        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Details Customer</p>
          <p class="text-gray-400">Complete your order by providing your customer details.</p>
          <div class="">
            <label for="name" class="mt-4 mb-2 block text-sm font-medium">Name</label>
            <div class="relative">
              <input type="text" id="name" name="name" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" required/>
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
              </div>
            </div>
            <label for="sales-person" class="mt-4 mb-2 block text-sm font-medium">Sales Person</label>
            <div class="relative">
              <input type="text" id="sales-person" name="sales-person" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" required />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
              </div>
            </div>
            <label for="sales-person" class="mt-4 mb-2 block text-sm font-medium">Note</label>
            <div class="relative">
              <textarea  id="sales-person" name="sales-person" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Optional" />
            </div>

            <div class="mt-6 border-t border-b py-2">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">Rp {cart.cartTotalAmount}</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Tax</p>
                <p class="font-semibold text-gray-900">Rp {pajak}</p>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">Total Price</p>
              <p class="text-2xl font-semibold text-gray-900">Rp {total}</p>
            </div>
          </div>
          <button onClick={() => handlePesanan} class="mt-4 mb-8 w-full rounded-md bg-blackgood px-6 py-3 font-medium text-white">Place Order</button>
        </div>
      </div>
      </>
  )
}

export default Cart