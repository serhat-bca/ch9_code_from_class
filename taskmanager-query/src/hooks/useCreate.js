import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/api";

export const useCreate = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
