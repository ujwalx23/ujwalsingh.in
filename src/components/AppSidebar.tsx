import { Home, User, Globe, Share2, Mail, Quote, Sparkles } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About Me", url: "/about", icon: User },
  { title: "My Websites", url: "/websites", icon: Globe },
  { title: "Social Links", url: "/social", icon: Share2 },
  { title: "Thoughts", url: "/thoughts", icon: Quote },
  { title: "Contact Me", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-primary/10 bg-gradient-to-b from-background to-primary/5">
      <SidebarHeader className="p-4 border-b border-primary/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <span className="font-bold text-lg gradient-text block leading-tight">Ujwal Singh</span>
              <span className="text-xs text-muted-foreground">Creator & Developer</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 text-foreground/80 hover:text-foreground"
                      activeClassName="bg-gradient-to-r from-primary/20 to-secondary/10 text-primary font-semibold shadow-sm border border-primary/20"
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-primary/10">
        {!isCollapsed && (
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              © 2024 Ujwal Singh
            </p>
            <p className="text-[10px] text-muted-foreground/60 mt-1">
              Built with ❤️
            </p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}