import Box from "@mui/material/Box";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import { useParams } from "react-router-dom";

export default function Main() {
  const writePerPage = 10;
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [fetched_writes, setFetchedWrites] = React.useState([]);

  let query_string = "?";

  let params = useParams();

  [
    { name: "user_nickname", value: params.nickname },
    { name: "write_datetime", value: params.write_datetime },
    { name: "title", value: params.title },
    { name: "category", value: params.category },
  ].map(
    (data) => (query_string += data.value ? `${data.name}=${data.value}&` : "")
  );

  query_string = query_string.substring(0, query_string.length - 1);

  React.useEffect(() => {
    fetch(`http://portfoliodb.link:8080/thread${query_string}`)
      .then((d) => d.json())
      .then((d) => {
        if (!d.error) {
          setFetchedWrites(d.results);
          setPageCount(Math.floor(d.results.length / writePerPage) + 1);
        } else {
          throw Error(d);
        }
      });
  }, []);

  return (
    <TableContainer
      component={Box}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minheight: "100vh",
        p: 2,
      }}
    >
      <Table sx={{ mb: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
              id
            </TableCell>
            <TableCell align="left">제목</TableCell>
            <TableCell align="right">작성자</TableCell>
            <TableCell
              sx={{ display: { xs: "none", md: "table-cell" } }}
              align="left"
            >
              카테고리
            </TableCell>
            <TableCell
              sx={{ display: { xs: "none", md: "table-cell" } }}
              align="right"
            >
              작성일
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetched_writes.map((table_data, idx) => {
            return idx >= (page - 1) * writePerPage &&
              idx < page * writePerPage ? (
              <TableRow
                key={table_data.id}
                onClick={() => {
                  window.location.href = `#/thread/view/${table_data.id}`;
                  window.location.reload();
                }}
                sx={{ cursor: "pointer" }}
              >
                <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                  {table_data.id}
                </TableCell>
                <TableCell align="left">{table_data.title}</TableCell>
                <TableCell align="right">{table_data.user_nickname}</TableCell>
                <TableCell
                  sx={{ display: { xs: "none", md: "table-cell" } }}
                  align="left"
                >
                  {table_data.category}
                </TableCell>
                <TableCell
                  sx={{ display: { xs: "none", md: "table-cell" } }}
                  align="right"
                >
                  {table_data.write_datetime}
                </TableCell>
              </TableRow>
            ) : (
              ""
            );
          })}
        </TableBody>
      </Table>

      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={(e, page) => setPage(page)}
      />
    </TableContainer>
  );
}
