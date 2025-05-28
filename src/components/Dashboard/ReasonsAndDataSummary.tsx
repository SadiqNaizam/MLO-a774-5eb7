import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Reason {
  id: string;
  percentage: number;
  text: string;
}

interface OtherDataStat {
  id: string;
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const reasonsLostData: Reason[] = [
  { id: 'proposalUnclear1', percentage: 40, text: 'The proposal is unclear' },
  { id: 'venturePursuit', percentage: 20, text: 'However venture pursuit' },
  { id: 'other', percentage: 10, text: 'Other' },
  { id: 'proposalUnclear2', percentage: 30, text: 'The proposal is unclear' }, // Second unclear reason as per image structure
];

const otherDataStats: OtherDataStat[] = [
  { id: 'totalLeads', value: '900', label: 'total leads count' },
  { id: 'avgConversionTime', value: '12', label: 'days in average to convert lead' },
  { id: 'inactiveLeads', value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const ReasonsAndDataSummary: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Reasons of leads lost</h3>
          <div className="space-y-5">
            {reasonsLostData.map((reason) => (
              <div key={reason.id}>
                <p className="text-3xl font-bold text-foreground">{reason.percentage}%</p>
                <p className="text-sm text-muted-foreground">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Other data</h3>
          <div className="space-y-5">
            {otherDataStats.map((stat) => (
              <div key={stat.id}>
                <div className="flex items-baseline">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  {stat.hasInfo && (
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <Info className="ml-1.5 h-4 w-4 text-muted-foreground cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-slate-800 text-white p-2 rounded text-xs max-w-xs">
                          <p>{stat.infoText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonsAndDataSummary;
