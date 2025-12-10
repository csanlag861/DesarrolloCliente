import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../utils/querys";

export const useProductos = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 1000 * 60,
  });
};
