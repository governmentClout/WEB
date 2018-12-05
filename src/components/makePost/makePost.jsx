import React, { Component } from "react";
import "./makePost.css";
import PostMedia from "./postMedia";
import axios from "axios";
import {API_URL} from "../config";

class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewPost: false,
      showNewArticle: false,
      showNewPoll: false
    };
    this.newPostToggle = this.newPostToggle.bind(this);
    this.newArticleToggle = this.newArticleToggle.bind(this);
    this.newPollToggle = this.newPollToggle.bind(this);
    this.closeAll = this.closeAll.bind(this);
  }
  newPostToggle() {
    if (this.state.showNewArticle || this.state.showNewPoll) {
      this.setState({ showNewArticle: false, showNewPoll: false });
    }
    let currentState = this.state.showNewPost;
    this.setState({ showNewPost: !currentState });
  }
  newPollToggle() {
    if (this.state.showNewPost || this.state.showNewArticle) {
      this.setState({ showNewArticle: false, showNewPost: false });
    }
    let currentState = this.state.showNewPoll;
    this.setState({ showNewPoll: !currentState });
  }
  newArticleToggle() {
    if (this.state.showNewPost || this.state.showNewPoll) {
      this.setState({ showNewPost: false, showNewPoll: false });
    }
    let currentState = this.state.showNewArticle;
    this.setState({ showNewArticle: !currentState });
  }
  updatePosts = () => this.props.updatePosts();
  closeAll() {
    this.setState({
      showNewPost: false,
      showNewArticle: false,
      showNewPoll: false
    });
  }
  render() {
    return (
      <div
        className={
          this.props.type !== "poll" ? "make-post" : "make-post not-rounded"
        }
      >
        <div className="make-post-header d-flex">
          {this.props.type !== "poll" ? (
            <>
              <button className="btn btn-tab" onClick={this.newPostToggle}>
                <i
                  className="fas fa-file text-gclout-blue"
                  style={{ marginRight: "10px" }}
                />
                Post
              </button>
              <button className="btn btn-tab" onClick={this.newArticleToggle}>
                <i
                  className="fas fa-clipboard-list text-gclout-blue"
                  style={{ marginRight: "10px" }}
                />
                Article
              </button>
            </>
          ) : (
            <button className="btn btn-tab" onClick={this.newPollToggle}>
              <i
                className="fas fa-poll text-gclout-blue"
                style={{ marginRight: "10px" }}
              />
              Poll
            </button>
          )}
          {this.state.showNewPost ||
          this.state.showNewArticle ||
          this.state.showNewPoll ? (
            <p
              className="text-right close-btn ml-auto align-self-center"
              onClick={this.closeAll}
            >
              <i className="fas fa-times" />
            </p>
          ) : (
            ""
          )}
        </div>
        {this.props.type !== "poll" ? (
          <>
            <PostCreation updatePosts={this.updatePosts} show={this.state.showNewPost} />
            <ArticleCreation updatePosts={this.updatePosts} show={this.state.showNewArticle} />
          </>
        ) : (
          <PollCreation show={this.state.showNewPoll} />
        )}
      </div>
    );
  }
}

export default MakePost;

class PostCreation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
      post: "",
      uploadImages: false,
      toProfile: false,
      disable: false,
      loading: false,
        selectedFile: null
    };

    this.updateWordCount= this.updateWordCount.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  updatePostsNow = () => this.props.updatePosts();

  fileSelected = (e) => {
    console.log(e.target.files[0]);
    this.setState({
        selectedFile: e.target.files[0]
    })

  };

    onSubmit(e) {

  // postData(ev) {
    this.setState({loading: true});

    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    e.preventDefault();

/*    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);*/

    const data = {

      post: this.state.post,
/*      attachment: fd*/

    };
    console.log(data);
    const url = `${API_URL}/posts`;
    console.log(url);

    axios({
    
      method: "post",
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        token: token,
        uuid: id
      }
    })
      .then(response => {

        this.setState({

            loading: false,
            post: ""

        });

        if (response.data.Success) {
            this.updatePostsNow();
          sessionStorage.setItem("message", response.data.Success)
        } else {
          console.log("login error")
        }
        console.log(response.data.Success);
      })
      .catch(err => {
        this.setState({loading: false, post: ""});
        console.log(err)
      });
  }

  updateWordCount = event => {
    this.setState({ post: event.target.value });
    if (this.state.post === "") {
      this.setState({ wordCount: 0 });
    } else {
      let wordCount = this.state.post.split(" ").length;
      this.setState({ wordCount: wordCount });
    }
    if (this.state.wordCount > 100 || this.state.wordCount === 0) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  };

  showImageUploader = event => {
    event.preventDefault();
    let currentState = this.state.uploadImages;
    this.setState({ uploadImages: !currentState });
  };

  render() {
    return (
      <div
        className={
          this.props.show ? "new-post-container show" : "new-post-container"
        }
      >
        <div className="pt-4 px-4 pb-5">
          <h5>Post</h5>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <textarea
                className={
                  this.state.wordCount < 100
                    ? "form-control"
                    : "form-control border-red"
                }
                rows="4"
                name="post"
                onChange={this.updateWordCount}
                onCut={this.updateWordCount}
                onBlur={this.updateWordCount}
                onPaste={this.updateWordCount}
                value={this.state.post}
                placeholder="Type post here..."
                required={true}
              />
            </div>
            <p className="text-right mb-0">
              {100 - this.state.wordCount} {""} words left
            </p>
            {/*<PostMedia showUploader={this.state.uploadImages} />*/}
            <input type="file" onChange={this.fileSelected} />
            <div className="d-flex">
              <button
                className="btn btn-gclout-blue mr-2"
                style={{ marginBottom: "0" }}
                disabled={!this.state.disable}
              >
                {this.state.loading ? <i className="fas fa-circle-notch fa-spin" /> : "Share post"} 
              </button>
              <button
                className="btn btn-gclout-blue-outline"
                style={{ marginBottom: "0" }}
                onClick={this.showImageUploader}
                type="button"
              >
                <i className="fas fa-camera mr-2" />
                Photo & Video
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class ArticleCreation extends Component {
  
  constructor(props) {
  
    super(props);

    this.state = {
        wordCount: 0, 
        article: "",
        title: "",
        uploadImages: false,
        toProfile: false,
        selectedFile: null
        
      };
    this.updateWordCount = this.updateWordCount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);



  }
  updatePostsNow = () => this.props.updatePosts();

  onImageChange = event => {
    console.log(event);

/*    const file = e.target.files[0];
    console.log(file);

    this.setState({

        selectedFile: e.target.files[0]

    })*/

  };

    updateWordCount(event) {
    this.setState({ article: event.target.value });
    if (this.state.article === "") {
      this.setState({ wordCount: 0 });
    } else {
      let wordCount = this.state.article.split(" ").length;
      this.setState({ wordCount: wordCount });
    }
  }

  showImageUploader = event => {
    event.preventDefault();
    let currentState = this.state.uploadImages;
    this.setState({ uploadImages: !currentState });
  };

  onSubmit(e) {

     this.setState({loading: true});
    const id = sessionStorage.getItem("uuid"),
      token = sessionStorage.getItem("token");

    console.log(id);
    console.log(token);

    e.preventDefault();

    const data = {

      post: this.state.article,
      attachment: this.state.selectedFile
        
    
    };

    console.log(data);
    console.log("lmao");

    axios({
    
      method: "post",
      url: "http://api.gclout.com:3000/posts",
      data: data,
      headers: {
    
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        token: token,
        uuid: id
    
      }
    
    })
      .then(response => {
        console.log(response.data);
        this.setState({loading: false, post: ""});
        this.updatePostsNow();

        if (response.data.Success) {

          this.setState({

            toProfile: true,
            article: "",
            title: ""

          });

          console.log('success');

          sessionStorage.setItem("message", response.data.Success)
        
        } else {

          console.log("login error")
        
        }

        console.log(response.data.Success);

      })
      .catch(err => {
        this.setState({loading: false, post: ""});
        console.log(err)
      });
  }
  render() {
    return (
      <div
        className={
          this.props.show ? "new-post-container show" : "new-post-container"
        }
      >
        <div className="pt-4 px-4 pb-5">
          <h5>Article</h5>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="article-title">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Title of article ..."
                value={this.state.tile}
              />
            </div> 
            <div className="form-group">
              <label htmlFor="new_article">Article</label>
              <textarea
                className="form-control"
                rows="4"
                name="article"
                onChange={this.updateWordCount}
                value={this.state.article}
                placeholder="Type article here..."
              />
            </div>
            <p className="text-right mb-0">
              {this.state.wordCount} {""} words
            </p>

{/*            <PostMedia type="file" showUploader={this.state.uploadImages} />*/}

            <div className="d-flex">
              <button
                className="btn btn-gclout-blue mr-2"
                style={{ marginBottom: "0" }}
              >
                Share article
              </button>
              <button
                className="btn btn-gclout-blue-outline"
                style={{ marginBottom: "0" }}
                onClick={this.showImageUploader}
              >
                <i className="fas fa-camera mr-2" />
                Photo & Video
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class PollCreation extends Component {

  constructor(props) {
    super(props);

    this.state = {

      wordCount: 0,
        opinion: "",
        sector: "",
        expiry: ""

    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onChange(e){

    this.setState({

        [e.target.name]: e.target.value

    })

  }

  onSubmit(e){

    e.preventDefault();

    const data = {

      opinion : this.state.opinion,
      sector: this.state.sector,
      expire_at: this.state.expiry

    };

    console.log(data);

    const id = sessionStorage.getItem("uuid"),
    token = sessionStorage.getItem("token");

    console.log(id, token);

    axios({

        method: 'post',
        url: `http://api.gclout.com:3000/polls`,
        data: data,
        headers: {

            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            token: token,
            uuid: id

        }

    }).then(res => {

      console.log(res.data);

      this.setState({

          opinion: "",
          date: "",
          sector: ""

      });

    }).catch(err => {

      console.log(err)

    });

  }
  render() {
    return (
      <div
        className={
          this.props.show ? "new-post-container show" : "new-post-container"
        }
      >
        <div className="pt-4 px-4 pb-5">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Sector</label>
              <select
                name="sector"
                className="form-control"
                /*value={this.state.sector}*/
                onChange={this.onChange}
                required
              >
                <option value="economy">Economy</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="education">Education</option>
                <option value="politics">Politics</option>
                <option value="security">Security</option>
                <option value="agriculture">Agriculture</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date</label>
                <input
                    type="date"
                    className="form-control"
                    name="expiry"
                    value={this.state.expiry}
                    onChange={this.onChange}
                />
            </div>
            <div className="form-group">
              <label>Opininion</label>
              <textarea
                className="form-control"
                rows="4"
                name="opinion"
                value={this.state.opinion}
                onChange={this.onChange}
                placeholder="Type opinion here..."
              />
            </div>
            <div className="d-flex">
              <button
                className="btn btn-gclout-blue mr-2"
                style={{ marginBottom: "0" }}
              >
                Share poll
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
