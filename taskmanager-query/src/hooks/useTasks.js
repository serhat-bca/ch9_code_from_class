import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../services/api";

export const useTasks = () => {
  return useQuery({ queryFn: fetchTasks, queryKey: ["tasks"] });
};
