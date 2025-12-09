import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      return await updateDoc(doc(db, "products", `prod ${String(id)}`), data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({producto, totalProductos}) => {
      const docID = `prod ${totalProductos + 1}`;
      
      return await setDoc(
        doc(db, "products", docID),
        producto
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
}

export function useDeleteProduct(){

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({id}) => {
            return await deleteDoc(doc(db, "products", `prod ${String(id)}`));
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        }
    })
}

