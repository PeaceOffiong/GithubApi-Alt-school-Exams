import React from 'react';
import { ErrorBoundary, Welcome, TestButton } from "../Components";


const TestErrorBoundary = () => {
  return (
      <div>
          <ErrorBoundary>
             <Welcome />
            <TestButton/>
          </ErrorBoundary>
    </div>
  )
}

export default TestErrorBoundary