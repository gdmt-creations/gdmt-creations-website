'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Briefcase,
  FolderOpen,
  Users,
  MessageCircle,
} from 'lucide-react';

const tabs = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Briefcase },
  { label: 'Portfolio', href: '/portfolio', icon: FolderOpen },
  { label: 'About', href: '/about', icon: Users },
  { label: 'Contact', href: '/contact', icon: MessageCircle },
];

const BottomTabBar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Glass background */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-[0_-2px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around px-2 pb-safe">
          {tabs.map((tab) => {
            const active = isActive(tab.href);
            const Icon = tab.icon;

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 px-3 min-w-[56px] transition-all duration-200 active:scale-90 ${
                  active ? 'text-[var(--color-primary)]' : 'text-gray-400'
                }`}
              >
                <div className="relative">
                  <Icon
                    className={`w-[22px] h-[22px] transition-all duration-200 ${
                      active ? 'stroke-[2.5px]' : 'stroke-[1.5px]'
                    }`}
                  />
                  {/* Active dot indicator */}
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-primary)]" />
                  )}
                </div>
                <span
                  className={`text-[10px] font-medium leading-tight mt-0.5 transition-all duration-200 ${
                    active ? 'font-semibold' : ''
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomTabBar;
