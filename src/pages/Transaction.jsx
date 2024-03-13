import {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function Transaction() {

    const [product, setProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products')
                .then(res => {
                    setProduct(res.data);
                })
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
      }, [])

    const handleAddCart = (item) => {
        dispatch(addToCart({...item}))
    }

  return (
    <div class="container mx-auto px-4 my-10 flex flex-row justify-around flex-wrap gap-10">
        {product.map((item) => (
            <div className="card w-64 bg-alus shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={item.img} alt="Gambar" className="rounded-xl object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-white">{item.item}</h2>
                    <p className='text-white'>Rp {item.totalCogs}</p>
                    <p className='text-white'>Stock: {item.stock}</p>
                    <div className="card-actions">
                    <button onClick={() => handleAddCart(item)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Transaction