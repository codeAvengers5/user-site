const Table = ({ data, columns, space, color }) => {
  let tableSpaceClass = "";

  if (space === "small") {
    tableSpaceClass = "border-spacing-y-5";
  } else if (space === "large") {
    tableSpaceClass = "border-spacing-y-10";
  }

  const headers = columns.map((column, index) => {
    return (
      <th
        key={`headCell-${index}`}
        className="!z-0 px-3 py-[15px] text-left font-regular">
        {column.title}
      </th>
    );
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length}>No data</td>
    </tr>
  ) : (
    data?.map((row, index) => {
      return (
        <tr key={`row-${index}`} className="bg-meke-400 hover:opacity-[70%]">
          {columns.map((column, index2) => {
            const value = column.render
              ? column.render(column, row)
              : row[column.key];

            return (
              <td key={`cell-${index2}`} className={`px-3 py-[15px] `}>
                {value}
              </td>
            );
          })}
        </tr>
      );
    })
  );

  return (
    <table
      className={`w-full table-fixed border-separate border-spacing-x-0 font-regular text-${color} ${tableSpaceClass}`}>
      <thead className="bg-meke-500">
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
