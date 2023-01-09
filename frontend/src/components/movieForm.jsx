import React from "react";
import Joi from "joi-browser";
import auth from "../services/authService";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UploadTutorial from './uploadTutorial';

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("MAximum Capacity"),
    dailyRentalRate: Joi.number()
      .integer()
      .required()
      .min(0)
      .max(6000)
      .label("Course Fee"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success",
        showConfirmButton: false,
        timer: 1500,
      });
    });

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Class Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput(
            "title",
            "Title",
            "text",
            !auth.getCurrentUser().isAdmin
          )}
          {this.renderSelect(
            "genreId",
            "Genre",
            this.state.genres,
            !auth.getCurrentUser().isAdmin
          )}
          {this.renderInput(
            "numberInStock",
            "Maximum Capacity",
            "number",
            !auth.getCurrentUser().isAdmin
          )}
          {this.renderInput(
            "dailyRentalRate",
            "Course Fee",
            "number",
            !auth.getCurrentUser().isAdmin
          )}
          {auth.getCurrentUser().isAdmin && this.renderButton("Save")}
        </form>
        <br></br>
        <br></br>
        <Link to="/mainpage">
        <button className="btn btn-success" >
          uploadTutorial
        </button>
      </Link>
      </div>
    );
  }
}

export default MovieForm;
