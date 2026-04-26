"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { Wallet } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Receipt,
  DollarSign,
  TrendingUp,
  LifeBuoyIcon,
  SendIcon,
  FrameIcon,
  PieChartIcon,
  MapIcon,
  UserRound,
} from "lucide-react";

const user = JSON.parse(localStorage.getItem("user"));
const data = {
  user: {
    name: user.username,
    email: user.email,
    avatar: user.avatar,
  },
  
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      title: "Expenses",
      url: "/expenses",
      icon: <Receipt />,
    },
    {
      title: "Income",
      url: "/income",
      icon: <DollarSign />,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: <TrendingUp />,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: <UserRound />,
    },
  ],
};
console.log(data.user);


export function AppSidebar({ ...props }) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Wallet className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Expense Tracker</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={data.user}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
