import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelCard from '../components/Dashboard/FunnelCard';
import SourcesCard from '../components/Dashboard/SourcesCard';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import ReasonsAndDataSummary from '../components/Dashboard/ReasonsAndDataSummary';

/**
 * LeadsOverviewPage is the main page for displaying leads-related analytics and data.
 * It assembles various dashboard components like FunnelCard, SourcesCard, LeadsTrackingChart,
 * and ReasonsAndDataSummary within the MainAppLayout.
 * 
 * The page structure follows the requirements for the "Leads Overview" target page,
 * utilizing a responsive grid layout for cards and charts.
 */
const LeadsOverviewPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The MainAppLayout component already provides a flex container with:
        - padding (p-8)
        - top margin for the fixed header (mt-[64px])
        - vertical gap between direct children (gap-8)
      */}

      {/* First row: Funnel Card and Sources Card */}
      {/* This div acts as a single child for MainAppLayout's flex container */}
      {/* It uses a responsive grid: 1 column on small screens, 2 columns on xl screens and up. */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <FunnelCard />
        <SourcesCard />
      </div>

      {/* Second row: Leads Tracking Chart (full width) */}
      {/* This component is a direct child in MainAppLayout's flex container */}
      <LeadsTrackingChart />

      {/* Third row: Reasons of Lost Leads and Other Data Summary (full width) */}
      {/* This component is a direct child in MainAppLayout's flex container */}
      <ReasonsAndDataSummary />

    </MainAppLayout>
  );
};

export default LeadsOverviewPage;
