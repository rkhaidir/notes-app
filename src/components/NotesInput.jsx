import React from "react";
import InputTitle from "./InputTitle";
import InputTextarea from "./InputTextarea";
import CustomButton from "./CustomButton";
import Swal from "sweetalert2";

export default class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title.length > 50) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Judul melebihi 50 karakter",
      });
    } else if (this.state.title.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Judul tidak boleh kosong",
      });
    } else {
      this.props.addNote(this.state);
      this.setState({
        title: "",
        body: "",
      });
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow my-4">
            <div className="card-body">
              <h2 className="card-title mb-3">Buat Catatan Baru</h2>
              <form onSubmit={this.onSubmitEventHandler}>
                <InputTitle
                  value={this.state.title}
                  change={this.onTitleChangeEventHandler}
                />
                <InputTextarea
                  value={this.state.body}
                  change={this.onBodyChangeEventHandler}
                />
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <CustomButton type="create" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
