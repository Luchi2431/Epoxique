import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; //Initially, no error
  }
  // This lifecycle method is called when an error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true }; // Updates state to show fallback UI
  }

  render() {
    if (this.state.hasError) {
      // Shows this fallback UI when an error occurs
      return <h1>Something went wrong.Please try again later.</h1>;
    }
    // If no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
