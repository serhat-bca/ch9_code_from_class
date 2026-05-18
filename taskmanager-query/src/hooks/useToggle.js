import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../services/api";

export const useToggle = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["tasks"] })
        }
    })
}