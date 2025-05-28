import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  // title?: string; // Example prop, not used in this specific implementation
  // className?: string; // Example prop, not used directly on MainAppLayout's root but could be
}

/**
 * MainAppLayout defines the overall structure for the application's dashboard pages.
 * It orchestrates the Sidebar, Header, and the main content area.
 * - Sidebar: Fixed width (w-60), full height, positioned to the left.
 * - Header: Fixed height (h-[64px]), positioned at the top, to the right of the sidebar.
 * - Main Content: Occupies the remaining space, is scrollable, and has padding.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  // Sidebar width: w-60 (240px), Tailwind class: ml-60
  // Header height: h-[64px], Tailwind class: mt-[64px]

  return (
    <div className="bg-background text-foreground">
      <Sidebar />
      <Header />
      <main
        className={cn(
          'ml-60',      // Account for the fixed sidebar (w-60)
          'mt-[64px]',  // Account for the fixed header (h-[64px])
          'p-8',        // Padding for the content area itself (mainContent.layout)
          'overflow-y-auto', // Make the main content area scrollable (overall.sizing.mainContent)
          'min-w-0',    // Prevent content from breaking layout (overall.sizing.mainContent)
          'h-[calc(100vh-64px)]' // Ensure main area takes up remaining viewport height for scrolling
        )}
      >
        {/* Inner container for content structure, e.g., flex column with gaps (mainContent.container) */}
        <div className="flex flex-col gap-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
