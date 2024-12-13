// Performance monitoring utilities
export const performance = {
  mark: (name: string) => {
    if (typeof window !== 'undefined') {
      window.performance.mark(name);
    }
  },

  measure: (name: string, startMark: string, endMark: string) => {
    if (typeof window !== 'undefined') {
      window.performance.measure(name, startMark, endMark);
    }
  },

  clearMarks: () => {
    if (typeof window !== 'undefined') {
      window.performance.clearMarks();
    }
  },

  clearMeasures: () => {
    if (typeof window !== 'undefined') {
      window.performance.clearMeasures();
    }
  }
};