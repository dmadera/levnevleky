import React from 'react';
import classNames from 'classnames';

class Component extends React.PureComponent {

  render() {
    return (
      <div className="row">
        <h2 className={classNames(this.props.className,  'page-title')}>
          {this.props.title}
        </h2>
      </div>
    );
  }
}

export default Component;
