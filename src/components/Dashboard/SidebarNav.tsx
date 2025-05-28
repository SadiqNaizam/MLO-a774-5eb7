import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UsersRound,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  ChevronRight, // Example for a potential submenu indicator, not used in current design
  Box // A generic icon for logo if needed
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#', isActive: false },
  { id: 'customers', label: 'Customers', icon: UsersRound, href: '#', isActive: false },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#', isActive: false },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#', isActive: false },
  { id: 'items', label: 'Items', icon: ShoppingCart, href: '#', isActive: false },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#', isActive: false },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#', isActive: false },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#', isActive: false },
];

const footerNavItems: NavItem[] = [
  { id: 'help1', label: 'Help', icon: HelpCircle, href: '#', isActive: false },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#', isActive: false },
  { id: 'help2', label: 'Help', icon: HelpCircle, href: '#', isActive: false }, // Duplicate label as per image structure
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 z-20 flex h-screen w-60 flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-[64px] items-center justify-start px-6 border-b border-sidebar-border">
        {/* <Box size={28} className="mr-3 text-sidebar-primary" /> Logo placeholder using generic Box Icon*/}
        <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-md bg-primary text-primary-foreground font-bold text-lg">
          BO
        </div>
        {/* <h1 className="text-xl font-semibold">Logo</h1> */}
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
        {mainNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
              item.isActive
                ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                : 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            )}
          >
            <item.icon className={cn('mr-3 h-5 w-5', item.isActive ? 'text-sidebar-primary-foreground' : 'text-sidebar-foreground group-hover:text-sidebar-accent-foreground')} />
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mt-auto border-t border-sidebar-border p-4 space-y-1">
        {footerNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            )}
          >
            <item.icon className="mr-3 h-5 w-5 text-sidebar-foreground group-hover:text-sidebar-accent-foreground" />
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SidebarNav;
