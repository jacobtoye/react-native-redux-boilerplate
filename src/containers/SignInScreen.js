import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginRequest } from 'actions/auth';
import { SignInScreen } from 'screens';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    login: loginRequest,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(SignInScreen);
