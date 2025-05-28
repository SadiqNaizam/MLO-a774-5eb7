import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Tooltip as ShadTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; // Renamed for clarity

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444' }, // red-500
  { name: 'Behance', value: 1000, percentage: 40, color: '#F59E0B' }, // amber-500
  { name: 'Instagram', value: 1000, percentage: 10, color: '#3B82F6' }, // blue-500
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#10B981' }, // emerald-500
];
// Note: Percentages in image (50,40,10,10) sum to 110%. I'll adjust for a sum of 100% for a proper pie chart.
const adjustedSourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 45, color: '#EF4444' }, 
  { name: 'Behance', value: 1000, percentage: 25, color: '#F59E0B' }, 
  { name: 'Instagram', value: 1000, percentage: 15, color: '#3B82F6' }, 
  { name: 'Dribbble', value: 1000, percentage: 15, color: '#10B981' },
];

const SourcesCard: React.FC<{ className?: string }> = ({ className }) => {
  const chartData = adjustedSourcesData.map(source => ({ name: source.name, value: source.percentage }));

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={50} // For donut chart effect
                  fill="#8884d8"
                  dataKey="value"
                >
                  {adjustedSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {adjustedSourcesData.map((source) => (
              <div key={source.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span
                    className="mr-2 inline-block h-3 w-3 rounded-sm"
                    style={{ backgroundColor: source.color }}
                  />
                  <span className="text-foreground">{source.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-3">$ {source.value.toLocaleString()}</span>
                  <span className="text-muted-foreground w-8 text-right">{source.percentage}%</span>
                </div>
              </div>
            ))}
             <div className="text-right mt-2">
                <TooltipProvider>
                  <ShadTooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <span className="text-xs text-muted-foreground cursor-default">from leads total</span>
                    </TooltipTrigger>
                    <ShadTooltipContent side="top" className="bg-slate-800 text-white p-2 rounded text-xs">
                      <p>Data based on total leads</p>
                    </ShadTooltipContent>
                  </ShadTooltip>
                </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesCard;
