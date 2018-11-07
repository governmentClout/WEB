import React, { Component } from "react";
import "./makePost.css";
import ReactDropzone from "react-dropzone";

class PostMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }
  onPreviewDrop = files => {
    this.setState({
      files: this.state.files.concat(files)
    });
  };
  deletePicture = () => {
    console.log("lol");
  };
  render() {
    return (
      <div className={this.props.showUploader ? "d-flex flex-wrap" : "d-none"}>
        <ReactDropzone
          accept="image/*"
          onDrop={this.onPreviewDrop}
          className="dropzone"
        >
          Click here to upload Image
        </ReactDropzone>
        {this.state.files.length > 0 && (
          <React.Fragment>
            {this.state.files.map(file => (
              <div>
                <div className="image-preview-wrapper">
                  <img alt="Preview" key={file.name} src={file.preview} />
                </div>
                <div className="preview-overlay">
                <button
                  type="button"
                  onClick={this.deletePicture()}
                  className="preview-delete"
                >
                  Delete
                </button>
              </div>
            </div>
            ))}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PostMedia;
