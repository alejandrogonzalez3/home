import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core";

const toText = (node) => {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  tag.removeChild(tag.getElementsByTagName("figure")[0]);
  node = tag.innerText;

  return node;
};

const useStyles = makeStyles(() => ({
  cardsmall: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundColor: "#fff",
    backgroundClip: "border-box",
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: ".25rem",
    boxShadow:
      "0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12), 0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1)",
  },
  cardpost__image: {
    position: "relative",
    minHeight: "13.3125rem",
    borderTopLeftRadius: "0.625rem",
    borderTopRightRadius: "0.625rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  grid: {
    marginBottom: "4.5rem!important",
    "& nth-child(3n+1)": {
      clear: "both",
    },
    "& h5": {
      marginTop: "15px",
    },
    "& svg": {
      display: "inline-block",
      fontSize: "inherit",
      height: "1em",
      overflow: "visible",
      verticalAlign: "-0.125em",
      width: "0.875em",
      marginRight: "10px",
    },
    "& span": {
      fontWeight: 500,
      fontSize: "15px",
      display: "inline",
    },
  },
  authorimg: {
    transform: "translateY(50%)",
    marginLeft: "1.5625rem",
    position: "absolute",
    bottom: 0,
    display: "flex!important",
    "& a": {
      boxShadow: "0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90, 97, 105, 0.5)",
      display: "block",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: "50%",
      textIndent: "-9999px",
      width: "3.1875rem",
      height: "3.1875rem",
    },
  },
  textfiordblue: {
    color: "#3d5170 !important",
  },
  cardText: {
    display: "block",
    /* or inline-block */
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    overflow: "hidden",
    maxHeight: "4.6em",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    fontWeight: "500",
    color: "#5a6169",
    fontSize: "15px",
  },
}));

const ShowBlog = (props) => {
  const c = useStyles();

  return (
    <div className={`col-md-4 col-sm-6 col-xs-12 ${c.grid}`}>
      <div className={c.cardsmall}>
        <div className={c.cardpost__image} style={{ backgroundImage: `url(${props.thumbnail})` }}>
          <div className={c.authorimg}>
            <a
              href={props.profileurl}
              rel="noopener noreferrer"
              target="_blank"
              style={{ backgroundImage: `url(${props.avtar})` }}
            >
              Medium image
            </a>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            <a className={c.textfiordblue} href={props.link} target="_blank" rel="noopener noreferrer">
              {props.title}
            </a>
          </h5>

          <p className={c.cardText}>{`${toText(props.description.substring(0, 1000))}...`}</p>
          <br />

          <span className="text-dark">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              ></path>
            </svg>
            {props.author}
          </span>

          <br />
          <span className="text-muted">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="calendar-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
              ></path>
            </svg>
            {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowBlog;
