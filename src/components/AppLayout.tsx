import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full max-w-full overflow-x-hidden">
        <AppSidebar />
        <main className="flex min-h-screen min-w-0 max-w-full flex-1 flex-col overflow-x-hidden">
          <header className="sticky top-0 z-50 flex h-14 w-full max-w-full items-center justify-between border-b border-border bg-background/80 px-2 backdrop-blur-md">
            <SidebarTrigger />
            <ThemeToggle />
          </header>
          <div className="flex-1 w-full max-w-full overflow-x-hidden px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
