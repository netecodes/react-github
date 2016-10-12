import React from 'react';

const Main = props => {
  return (
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        {props.children}
      </div>
    </div>
  )
}

export default Main;
