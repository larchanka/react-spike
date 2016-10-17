import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * A wrapper of 'react-redux' `connect` that accepts a second optional parameter
 * to specify a custom store context key, instead of 'store'
 */
function connectCustomStoreKey(...args) {
  return (Component, storeName = 'store') => {
    // Return the "normal" connected component from `react-redux`.
    // Then wrap it and pass the store with the custom name as a `prop`,
    // after picking it from `context`.
    const ConnectedComponent = connect(...args)(Component);

    const Wrapper = (props, context) => (
      <ConnectedComponent {...props} store={context[storeName]} />
    );

    Wrapper.displayName = `WrappedConnect(${ConnectedComponent.displayName})`;
    Wrapper.contextTypes = {
      [storeName]: PropTypes.object,
    };

    return Wrapper;
  };
}

export {
  connectCustomStoreKey as connect
};
