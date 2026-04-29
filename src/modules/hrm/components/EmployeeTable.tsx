import type { ColumnDef } from "@tanstack/react-table";
import TableWrapper from "../../../shared/components/ui/TableWrapper";

type Employee = {
id: number;
name: string;
role: string;
department: string;
};

const data: Employee[] = [
{ id: 1, name: "John Doe", role: "Developer", department: "IT" },
{ id: 2, name: "Jane Smith", role: "HR Manager", department: "HR" },
];

const columns: ColumnDef<Employee>[] = [
{ accessorKey: "name", header: "Name" },
{ accessorKey: "role", header: "Role" },
{ accessorKey: "department", header: "Department" },
];

const EmployeeTable = () => {
return <TableWrapper data={data} columns={columns} />;
};

export default EmployeeTable;
