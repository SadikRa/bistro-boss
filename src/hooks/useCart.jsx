import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';

const useCart = () =>{

    // const token = localStorage.getItem('access-token')

    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = []  } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        } 
        
      })
      return [cart, refetch]
}

export default useCart;