import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { RESET_TO_SIGN_IN } from 'actions/types';
import { ProfileScreen } from 'screens';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onPress: () => ({ type: RESET_TO_SIGN_IN }),
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ProfileScreen);
