import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
            {value: "name-asc", label: "Sort by Name (A-Z)"},
            {value: "name-desc", label: "Sort by Name (Z-A)"},
            {value: "regularPrice-asc", label: "Sort by Price (low first)"},
            {value: "regularPrice-desc", label: "Sort by Price (high first)"},
            {value: "maxCapacity-asc", label: "Sort by capacity (low first)"},
            {value: "maxCapacity-desc", label: "Sort by capacity (high first)"},
        ]} />
    </TableOperations>
  );
}

export default CabinTableOperations;
