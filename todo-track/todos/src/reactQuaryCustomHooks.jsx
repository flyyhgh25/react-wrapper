import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import {toast} from "react-toastify"
import customFetch from "./utils"

export const useFetchTodos = () =>{
    const {isLoading, isError, data} = useQuery({
        queryKey: ["todos"],
        queryFn : async ()=>{
            const {data} = await customFetch.get("/")
            return data
        } 
    });
    return {isLoading, isError, data}
}

export const useCreateTodos = ()=>{
    const queryClient = useQueryClient();
    const {mutate: createTodo, isLoading} = useMutation({
        mutationFn: ({title, account, note, status, progress, due_date})=> customFetch.post("/",{
            title : title,
            account : account,
            note: note,
            status : status,
            progress : progress,
            due_date : due_date
        }),
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ["todos"]});
            toast.success("Todo added")
        }
    })
    return {createTodo, isLoading}
}