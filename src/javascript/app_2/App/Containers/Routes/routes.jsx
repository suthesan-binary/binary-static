import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes                      from 'prop-types';
import React                          from 'react';
import { withRouter }                 from 'react-router';
import ErrorComponent                 from '../../Components/Elements/Errors';
import BinaryRoutes                   from '../../Components/Routes';
import { connect }                    from '../../../Stores/connect';
import GTM                            from '../../../../_common/base/gtm';

const Routes = (props) => {
    if (props.has_error) {
        return <ErrorComponent {...props.error} />;
    }

    GTM.pushDataLayer(); // fire 'page_load' event

    return <BinaryRoutes />;
};

Routes.propTypes = {
    error    : MobxPropTypes.objectOrObservableObject,
    has_error: PropTypes.bool,
};

// need to wrap withRouter around connect
// to prevent updates on <BinaryRoutes /> from being blocked
export default withRouter(connect(
    ({ common }) => ({
        error    : common.error,
        has_error: common.has_error,
    })
)(Routes));
