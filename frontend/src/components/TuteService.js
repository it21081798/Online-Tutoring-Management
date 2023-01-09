import axios from "axios";

export default class TuteService {
  deleteTute(id) {
    const res = window.confirm(
      "Are you sure you want to delete the thing in the database?"
    );

    console.log(res);

    if (res) {
      axios
        .delete("http://localhost:8050/tutorial/deleteTutorial/" + id)
        .then(() => {
          console.log(" Deleted !!!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //window.location='/list';
  }
}
