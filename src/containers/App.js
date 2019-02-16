import { connect } from "react-redux";

import App from "../components/App";
import { plus, minus, asyncMinus, getJson } from "../actions";

const mapStateToProps = state => {
  return {
    number: state.number,
    title: state.title,
    day: state.day
  };
};

const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch(plus(num));
    },

    minus: num => {
      dispatch(minus(num));
    },

    asyncMinus: num => {
      dispatch(asyncMinus(num));
    },

    getJson: () => {
      dispatch(getJson());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
