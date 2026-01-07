import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
          <header className="sticky top-0 z-50 flex items-center h-16 px-4 md:px-6 border-b border-primary/10 bg-background/80 backdrop-blur-lg">
            <SidebarTrigger className="mr-4 hover:bg-primary/10 rounded-lg p-2 transition-colors" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text hidden sm:block">Ujwal Singh</span>
            </div>
          </header>
          <div className="flex-1 p-4 md:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}