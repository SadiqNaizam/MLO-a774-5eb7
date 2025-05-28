import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface ChartDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: ChartDataPoint[] = [
  { month: 'March', closedWon: 65, closedLost: 58 },
  { month: 'April', closedWon: 59, closedLost: 38 },
  { month: 'May', closedWon: 80, closedLost: 42 },
  { month: 'June', closedWon: 61, closedLost: 10 },
  { month: 'July', closedWon: 75, closedLost: 45 },
  { month: 'August', closedWon: 92, closedLost: 32 },
];

type ActiveButton = 'Leads came' | 'Leads Converted' | 'Total deals size';

const LeadsTrackingChart: React.FC<{ className?: string }> = ({ className }) => {
  const [selectedTimeRange, setSelectedTimeRange] = React.useState<string>('last 6 months');
  const [activeButton, setActiveButton] = React.useState<ActiveButton>('Leads Converted');

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Leads tracking</CardTitle>
            <div className="mt-1">
              <span className="text-3xl font-bold text-foreground">680</span>
              <span className="ml-2 text-sm text-muted-foreground">total closed</span>
              <span className="ml-4 text-3xl font-bold text-foreground">70</span>
              <span className="ml-2 text-sm text-muted-foreground">total lost</span>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex space-x-1 border border-border p-0.5 rounded-md">
              {(['Leads came', 'Leads Converted', 'Total deals size'] as ActiveButton[]).map((btnName) => (
                <Button 
                  key={btnName} 
                  variant={activeButton === btnName ? 'secondary' : 'ghost'} 
                  size="sm" 
                  onClick={() => setActiveButton(btnName)}
                  className={cn(
                    "text-xs h-7 px-2", 
                    activeButton === btnName ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
                  )}
                >
                  {btnName}
                </Button>
              ))}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center text-xs h-8">
                  <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
                  {selectedTimeRange}
                  <ChevronDown className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {['last 24 hours', 'last 7 days', 'last 30 days', 'last 6 months', 'last year'].map((range) => (
                  <DropdownMenuItem key={range} onClick={() => setSelectedTimeRange(range)} className="text-xs">
                    {range}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} dy={10} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: 'var(--radius)' }}
              labelStyle={{ color: 'hsl(var(--card-foreground))', fontWeight: 'bold' }}
            />
            <Legend 
              verticalAlign="bottom" 
              iconType="square" 
              iconSize={10} 
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: 'hsl(var(--muted-foreground))' }}
            />
            <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="closedWon" name="Closed won" stroke="#10B981" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#10B981' }} activeDot={{ r: 6, fill: '#10B981', stroke: 'hsl(var(--background))' }}/>
            <Area type="monotone" dataKey="closedLost" name="Closed lost" stroke="#EF4444" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#EF4444' }} activeDot={{ r: 6, fill: '#EF4444', stroke: 'hsl(var(--background))' }}/>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
