import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Max Capacity" },
    { path: "dailyRentalRate", label: "Course Fee" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },

    // {
    //   content: (movie) => (
    //     <Link to={`${"/enroll/" + movie._id}`}>
    //       <button className="btn btn-primary btn-sm">Enroll</button>
    //     </Link>
    //   ),
    // },

    // {
    //   content: (movie) => (
    //     <Link to="/">
    //       <button className="btn btn-primary btn-sm">Add to Cart</button>
    //     </Link>
    //   ),
    // },
  ];

  enrollColumn = {
    key: "enroll",
    content: (movie) => (
      <Link to={`/enroll/${movie._id}`}>
        <button className="btn btn-primary btn-sm">Enroll</button>
      </Link>
    ),
  };

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
    if (user) this.columns.push(this.enrollColumn);
  }

  //   raiseSort = (path) => {
  //     const sortColumn = { ...this.props.sortColumn };
  //     if (sortColumn.path === path)
  //       sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //     else {
  //       sortColumn.path = path;
  //       sortColumn.order = "asc";
  //     }
  //     this.props.onSort(sortColumn);
  //   };
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
