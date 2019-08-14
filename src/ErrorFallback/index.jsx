import React from 'react';

export default class ErrorFallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    return (
      <>
        {this.state.hasError
          ? <div>Hey sorry, we'll look into this issue</div>
          : this.props.children}
      </>
    );
  }
}
