import React, { Component } from "react";
import "./post.css";
import axios from 'axios';

export default class SinglePost extends Component {

    constructor(){
        super();

        this.state = {
            like: "",
            likes: []
        };

    }


    componentDidMount() {
        this.showLikesCount();
    }

    showLikesCount(){
        const id = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const url = "http://api.gclout.com:3000/reactions/" + this.props.postID;
        console.log(url);

        axios({

            method: 'get',
            url: url,
            headers: {

                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: id

            }

        }).then(res => {

            console.log(res.data[0].reactions);

            this.setState ({

                likes: res.data[0].reactions

            })
        });
    }

    showComment = () => {
        this.props.showComment();
    }


    likePost = () => {
        console.log('clicked');
        const uuid = sessionStorage.getItem("uuid"),
            token = sessionStorage.getItem("token");

        const data = {

            post: this.props.postID

        };
        const url = 'http://api.gclout.com:3000/reactions/' +this.props.postID;
        console.log(url);
        axios({

            method: 'post',
            url: url,
            data: data,
            headers: {

                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                token: token,
                uuid: uuid

            }

        }).then(res => {
            this.showLikesCount();
        })

        /*const likes = this.state;

        const newLikes = res.data[0].reactions*/

    };

  render() {

      const { likes } = this.state;

    return (
      <div className="post-actions-container">
        <button className="post-action" onClick={this.showComment}>
          {" "}
          <i className="far fa-comment"/> comments
        </button>
        <button className="post-action">
          {" "}
          <i className="fas fa-share" /> Share
        </button>
        <p>
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0986 8.01726L19.413 9.23327L16.6566 16.7294C16.3986 17.4344 14.9998 19.6406 14.0256 20.0906L13.7892 20.7346C13.729 20.8978 13.5743 21 13.41 21C13.3636 21 13.3172 20.9914 13.2708 20.9751C13.0618 20.8978 12.9535 20.6668 13.0309 20.4564L13.2544 19.8475C12.76 18.8883 13.1289 16.1025 13.3456 15.5134L16.0986 8.01726ZM20.8953 0.0857535C19.9839 -0.247445 18.9169 0.44128 18.6117 1.27342L16.6153 6.70594L19.9289 7.92022L21.9227 2.48856C22.1738 1.80843 21.8084 0.419811 20.8953 0.0857535ZM14.8983 7.73645C14.9912 7.7708 15.0866 7.78712 15.1795 7.78712C15.5079 7.78712 15.8166 7.58617 15.9378 7.25984L18.0443 1.58515C18.1999 1.16693 17.9858 0.702343 17.5671 0.547767C17.1449 0.394907 16.6832 0.606162 16.5276 1.02438L14.4211 6.69907C14.2655 7.11728 14.4796 7.58187 14.8983 7.73645ZM11.5073 18.3773C11.2898 18.1721 11.019 17.9162 10.5805 17.7213C10.2194 17.5607 9.86774 17.5529 9.61066 17.5469C9.58401 17.5469 9.55306 17.5461 9.5221 17.5452C9.36133 17.1055 9.03547 16.829 8.54625 16.7208C7.89884 16.5843 7.38211 16.8891 7.02358 17.1244C7.05539 16.9441 7.10784 16.7294 7.14653 16.5748C7.27034 16.0767 7.39759 15.5615 7.30301 15.0788C7.22821 14.6976 6.90579 14.4142 6.51717 14.3867C5.51552 14.3309 4.69701 14.8693 3.97566 15.3562C3.21819 15.8672 2.73241 16.1721 2.24922 15.9994C1.65941 15.7899 1.60008 14.1952 1.88381 12.7748C2.13745 11.4952 2.60946 9.11304 3.81918 8.031C4.22671 7.66689 4.81652 7.27272 5.30144 7.46422C5.87147 7.6875 6.34263 8.62527 6.44753 9.74251C6.49138 10.214 6.90321 10.5601 7.38383 10.5171C7.85671 10.4733 8.20406 10.0542 8.15935 9.58192C7.98911 7.76135 7.13449 6.33753 5.92994 5.86435C5.20858 5.5844 4.06164 5.50882 2.67137 6.75145C1.15901 8.104 0.600157 10.3977 0.1952 12.4407C-0.00770855 13.4609 -0.502083 16.8462 1.67144 17.6182C2.99551 18.0897 4.07109 17.3623 4.93517 16.7801C5.09337 16.6736 5.24899 16.5688 5.40031 16.4752C5.25673 17.0978 5.16731 17.7642 5.5439 18.3258C6.10533 19.1691 6.89891 19.261 7.90142 18.6015C7.94011 18.5766 7.98482 18.5474 8.02695 18.5182C8.1198 18.7123 8.28402 18.9261 8.58236 19.0721C8.94347 19.249 9.30458 19.2576 9.56767 19.2644C9.6803 19.267 9.8342 19.2705 9.88063 19.2911C10.0423 19.3623 10.1377 19.4499 10.3234 19.6251C10.4627 19.7565 10.6097 19.8931 10.7963 20.0339C10.9511 20.1498 11.1316 20.2048 11.3104 20.2048C11.5718 20.2048 11.8306 20.0854 11.9991 19.8613C12.2837 19.4817 12.2063 18.9433 11.8263 18.659C11.7016 18.5628 11.6028 18.4675 11.5073 18.3773Z" fill="#030104"/>
            </svg>
            {" "} 1 signed
        </p>
        <button className="btn btn-gclout-blue">
          Sign petition
        </button>
      </div>
    );
  }
}
