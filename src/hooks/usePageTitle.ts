import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    // Cleanup function to restore previous title if needed
    return () => {
      // Optionally restore previous title
    }
  }, [title])
} 