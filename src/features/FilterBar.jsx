import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import CustomSelect from "./../components/CustomSelect";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { fetchRepoData } from "./repoDataSlice";
import { selectRepoData } from "../features/repoDataSlice";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const searchTypes = ["language", "name"];
const orderByTypes = ["desc", "asc"];
const sortByTypes = ["starts", "name"];

const Filters = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

const SearchButton = styled(Button)(({ theme }) => ({
  height: "100%",
}));

const PaginationContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

const FilterBar = ({ children }) => {
  const [searchType, setSearchType] = useState(searchTypes[0]);
  const [searchValue, setSearchValue] = useState("javascript");
  const [orderBy, setOrderBy] = useState(orderByTypes[0]);
  const [sortBy, setSortBy] = useState(sortByTypes[0]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  const dispatch = useDispatch();
  const repoData = useSelector(selectRepoData);
  const { totalCount, state } = repoData;

  function fetchData() {
    dispatch(
      fetchRepoData({
        searchType,
        searchValue,
        sortBy,
        orderBy,
        pageNumber,
        pageSize,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  function handlePageChange(e, value) {
    setPageNumber(value);
    fetchData();
  }

  useEffect(() => {
    return fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Filters
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
      >
        <Grid item xs={4} sm={3} md={2}>
          <CustomSelect
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            {searchTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            //   onBlur={(e) => setSearchValue(e.target.value)}
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <CustomSelect
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            {orderByTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <CustomSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortByTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <TextField
            size="small"
            fullWidth={true}
            type="number"
            value={pageSize}
            onChange={(e) => setPageSize(+e.target.value)}
          />
        </Grid>
        <Grid item xs={4} sm={3} md={2}>
          <CustomSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortByTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </CustomSelect>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <SearchButton type="submit" variant="contained" fullWidth={true}>
            Search
          </SearchButton>
        </Grid>
      </Filters>

      {state === "loading" && <LinearProgress />}
      <Typography variant="h6">
        Total Search Results for {searchType} : {searchValue} are {totalCount}
      </Typography>
      {children}
      <PaginationContainer>
        <Pagination
          count={Math.ceil(totalCount / pageSize)}
          page={+pageNumber}
          onChange={handlePageChange}
        />
      </PaginationContainer>
    </form>
  );
};

export default FilterBar;
