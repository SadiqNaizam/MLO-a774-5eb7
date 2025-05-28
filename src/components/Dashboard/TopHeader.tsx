import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<'sales' | 'leads'>('leads');
  const [selectedTimeRange, setSelectedTimeRange] = React.useState<string>('last 6 months');

  return (
    <header
      className={cn(
        'fixed top-0 left-60 right-0 z-10 flex h-[64px] items-center justify-between border-b bg-background px-6',
        className
      )}
    >
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-foreground mr-6">Dashboard</h1>
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'sales' | 'leads')} className="w-[200px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              {selectedTimeRange}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {['last 24 hours', 'last 7 days', 'last 30 days', 'last 6 months', 'last year'].map((range) => (
              <DropdownMenuItem key={range} onClick={() => setSelectedTimeRange(range)}>
                {range}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Contact</DropdownMenuItem>
            <DropdownMenuItem>New Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
