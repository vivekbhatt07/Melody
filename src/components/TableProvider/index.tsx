import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { IconAction } from "..";
import { Pause, PlayArrow } from "@mui/icons-material";
import SongLogo from "../../assets/images/songIcon.png";
import DeleteIcon from "../../assets/images/deleteIcon.svg";

interface Data {
  id: string;
  title: string;
  source: string;
  addedOn: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "title",
    numeric: false,
    label: "SONG NAME",
  },
  {
    id: "source",
    numeric: false,
    label: "SOURCE",
  },
  {
    id: "addedOn",
    numeric: false,
    label: "ADDED ON",
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;

  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  //@ts-ignore
  const { order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000000D9",
              fontWeight: 500,
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center">ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function TableProvider({
  data,
  deleteAction,
  isPlaying,
  togglePlayPause,
  currentTrack,
  setCurrentTrack,
}) {
  const rows = data;
  console.log(rows);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("title");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    //@ts-ignore
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  //@ts-ignore
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", boxShadow: "none" }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle" sx={{ minHeight: "420px" }}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className="relative">
              {visibleRows.map((row) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell component="th" scope="row">
                      <div className="flex gap-5 items-center">
                        <div className="w-[40px] h-[40px]">
                          <img src={row.thumbnail} alt={row.title} />
                        </div>
                        <span
                          style={{
                            fontSize: "14px",
                            lineHeight: "22px",
                            color: "#000000D9",
                            fontWeight: 400,
                          }}
                        >
                          {row.title}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#000000D9",
                        fontWeight: 400,
                      }}
                    >
                      {row.source}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#000000D9",
                        fontWeight: 400,
                      }}
                    >
                      {row.addedOn}
                    </TableCell>
                    <TableCell>
                      <div
                        style={{
                          display: "flex",
                          gap: "16px",
                          justifyContent: "space-between",
                        }}
                      >
                        <IconAction
                          onClick={() => {
                            if (isPlaying && currentTrack.id !== row.id) {
                              return setCurrentTrack(row);
                            }
                            setCurrentTrack(row);
                            togglePlayPause();
                          }}
                        >
                          {isPlaying && currentTrack.id === row.id ? (
                            <Pause />
                          ) : (
                            <PlayArrow />
                          )}
                        </IconAction>
                        <IconAction
                          sx={{
                            backgroundColor: "transparent",
                            "&:hover": { background: "#ddd" },
                          }}
                          onClick={() => deleteAction(row.id)}
                        >
                          <img src={DeleteIcon} alt="delete icon" />
                        </IconAction>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {visibleRows.length === 0 && (
                <div className="p-4 absolute left-1/2 -translate-x-1/2">
                  No Playlist Found
                </div>
              )}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
