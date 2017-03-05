import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'actions/app';
import HomeView from 'views/Home'

const mapStateToProps = ({app}) => {
  return {
    asyncData: app.asyncData,
    asyncError: app.asyncError,
    asyncLoading: app.asyncLoading,
    counter: app.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

const Home = props => {
  const {
    actions, 
    app,
    asyncData,
    asyncError,
    asyncLoading,
    counter
  } = props;
  const handleAsyncButtonClick = () => actions.testAsync();
  const handleTestButtonClick = () => actions.testAction();
  return HomeView({...props, handleAsyncButtonClick, handleTestButtonClick})
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
