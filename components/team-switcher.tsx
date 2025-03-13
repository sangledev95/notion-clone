"use client";

import * as React from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher() {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <Image
          src={"../../public/file.svg"}
          width={36}
          height={36}
          alt="Logo"
        />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">Bv LNT</span>
        <span className="truncate text-xs">BV Da khoa</span>
      </div>
    </SidebarMenuButton>
  );
}
