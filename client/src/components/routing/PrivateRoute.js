import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  element: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  // <Route
  //   {...rest}
  //   render={(props) =>
  //     !isAuthenticated && !loading ? (
  //       <Navigate to='/login' />
  //     ) : (
  //       <Component {...props} />
  //     )
  //   }
  // />

  if (!isAuthenticated && !loading) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
