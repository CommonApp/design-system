/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import componentUtil from 'app_modules/ui/util/component';
import classNames from 'classnames';
const pf = componentUtil.prefix;

class Component extends React.Component {
  constructor(props) {
    super(props);
    componentUtil.install(this);
  }
  render() {
    const className = this.$getClassNameWithFlavor('slds-media');
    return (
      <div className={className}>
        {this.renderFigure(
          this.props.figureCenter,
          classNames('slds-media__figure--stacked', this.props.figureCenterClassName)
        )}
        {this.renderFigure(
          this.props.figureLeft,
          this.props.figureLeftClassName
        )}
        <div className="slds-media__body">
          {this.props.children}
        </div>
        {this.renderFigure(
          this.props.figureRight,
          classNames('slds-media__figure--reverse', this.props.figureRightClassName)
        )}
      </div>
    );
  }
  renderFigure(figure, className) {
    if (!figure) return null;
    className = classNames('slds-media__figure', className);
    return (
      <div className={className}>
        {figure}
      </div>
    );
  }
}

Component.displayName = 'MediaObject';
Component.PropTypes = {
  figureLeft: React.PropTypes.node,
  figureLeftClassName: React.PropTypes.string,
  figureRight: React.PropTypes.node,
  figureRightClassName: React.PropTypes.string,
  figureCenter: React.PropTypes.node,
  figureCenterClassName: React.PropTypes.string,
  flavor: React.PropTypes.oneOf(['center', 'small', 'stacked'])
};

export default Component;