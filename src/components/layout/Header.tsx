import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header component for the application layout.
 * It renders the top header bar of the dashboard.
 * The actual styling and fixed positioning (h-[64px], fixed, left-60) are handled by TopHeader.
 */
const Header: React.FC = () => {
  return <TopHeader />;
};

export default Header;
