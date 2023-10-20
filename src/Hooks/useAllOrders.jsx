import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllOrders = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: orders = [], refetch } = useQuery(['orders'], async () => {
        const res = await axiosSecure.get("/allOrders");
        return res.data;
    })
    return [orders, refetch];
};

export default useAllOrders;