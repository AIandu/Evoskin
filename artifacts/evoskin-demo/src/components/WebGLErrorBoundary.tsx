import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-background text-primary font-mono text-sm p-8">
          <div className="border border-primary/40 p-8 max-w-md text-center space-y-4">
            <div className="text-primary/60 text-xs uppercase tracking-widest">System Alert</div>
            <div className="text-primary text-base">WebGL context unavailable</div>
            <div className="text-primary/50 text-xs">
              This environment does not support hardware-accelerated WebGL.<br />
              Open in a modern desktop browser to run the full optical camouflage simulation.
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
