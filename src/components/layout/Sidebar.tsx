import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component for the application layout.
 * It renders the main navigation sidebar.
 * The actual styling and fixed positioning (w-60, h-screen, fixed) are handled by SidebarNav.
 */
const Sidebar: React.FC = () => {
  return <SidebarNav />;
};

export default Sidebar;
