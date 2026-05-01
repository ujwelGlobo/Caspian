import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "./fakeEmployees";

type Employee = {
id: number;
name: string;
email: string;
role: string;
};

export const useEmployees = () => {
return useQuery<Employee[]>({
queryKey: ["employees"],
queryFn: getEmployees,
});
};
