import React from 'react';
import classNames from 'classnames';

class Component extends React.PureComponent {

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2 className={classNames(this.props.className,  'page-title')}>
            {this.props.title}
          </h2>
        </div>
      </div>
    );
  }
}

export default Component;
