/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  //여기서 props video는 selectedVideo 녀석임
  //두번째 props로 적힌 녀석은 video 안에있는 snippet에 접근하게 해주는 녀석
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      //items안에 따로 video url에 접근하는 방법이 없어 id로 접근함
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h2>{snippet.channelTitle}</h2>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
