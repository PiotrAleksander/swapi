import React, { ReactNode, ErrorInfo } from "react";
import * as Sentry from "@sentry/browser";
import Typography from "@material-ui/core/Typography";

export default class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Typography component="h1">
          Something went wrong. Please shuffle again.
        </Typography>
      );
    }

    return this.props.children;
  }
}
