import React from 'react';
import classNames from 'classnames';

class Component extends React.PureComponent {

  render() {
    return (
        <h2 className={classNames(this.props.className,  'page-title')}>
          {this.props.title}
        </h2>
    );
  }
}

export default Component;
