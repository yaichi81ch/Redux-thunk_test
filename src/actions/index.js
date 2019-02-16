import axios from "axios";

export const plus = num => {
  return { type: "PLUS", payload: { num: num } };
};

export const minus = num => {
  return { type: "MINUS", payload: { num: num } };
};

export const asyncMinus = num => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }, 1000);
  };
};

export const changeTitle = title => {
  return { type: "CHANGE_TITLE", payload: { title: title } };
};

export const getJson = () => {
  return dispatch => {
    dispatch({ type: "WAIT" });

    const url = "https://api.myjson.com/bins/1fd0s0";

    axios.get(url).then(res => {
      console.log(res.data);
      dispatch(changeTitle(res.data.member[1].name));
    });
  };
};
