import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from 'actions/app';
import HomeView from 'views/Home'

const mapStateToProps = (state) => {
  return {
    asyncData: state.app.get('asyncData'),
    asyncError: state.app.get('asyncError'),
    asyncLoading: state.app.get('asyncLoading'),
    counter: state.app.get('counter')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

const Home = props => {
  const {actions} = props;
  const handleAsyncButtonClick = () => actions.testAsync();
  const handleTestButtonClick = () => actions.testAction();
  return HomeView({...props, handleAsyncButtonClick, handleTestButtonClick})
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
