import type { ColumnDef } from "@tanstack/react-table";
import TableWrapper from "../../../shared/components/ui/TableWrapper";
import { useEmployees } from "../api/useEmployees";

type Employee = {
id: number;
name: string;
role: string;
department: string;
};

const columns: ColumnDef<Employee>[] = [
{ accessorKey: "id", header: "ID" },
{ accessorKey: "name", header: "Name" },
{ accessorKey: "role", header: "Role" },
{ accessorKey: "department", header: "Department" },
];

const EmployeeTable = () => {
const { data, isLoading } = useEmployees(); // ✅ correct place

if (isLoading) {
return <div>Loading employees...</div>;
}

return (
<TableWrapper
data={data ?? []}   // ✅ safe fallback
columns={columns}
title="Employees"
subtitle="All registered employees"
/>
);
};

export default EmployeeTable;
