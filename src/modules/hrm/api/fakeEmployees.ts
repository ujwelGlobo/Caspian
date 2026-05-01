export type Employee = {
id: number;
name: string;
email: string;
role: string;
};

let employees: Employee[] = [
{
id: 1,
name: "John Doe",
email: "john@test.com",
role: "Developer",
},
];

export const getEmployees = async (): Promise<Employee[]> => {
return new Promise((resolve) => {
setTimeout(() => resolve([...employees]), 300);
});
};

export const addEmployee = async (
data: Omit<Employee, "id">
): Promise<Employee> => {
return new Promise((resolve) => {
setTimeout(() => {
const newEmployee = { id: Date.now(), ...data };
employees.push(newEmployee);
resolve(newEmployee);
}, 300);
});
};
