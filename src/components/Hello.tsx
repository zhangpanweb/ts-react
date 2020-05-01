import * as React from 'react';

interface AlertMessageProps {
  message: string;
}

export default class AlertMessage extends React.Component<Props> {
  static defaultProps: AlertMessageProps = {
    message: "Hello there"
 };

  render () {
    return <h1>{this.props.message}</h1>;
  }
}