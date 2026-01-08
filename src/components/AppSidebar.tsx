import { Home, User, Globe, Share2, Mail, Quote } from "lucide-react";
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
    <Sidebar collapsible="icon" className="border-r border-primary/10">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✨</span>
          {!isCollapsed && (
            <span className="font-bold text-lg gradient-text">Ujwal Singh</span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-primary/10"
                      activeClassName="bg-primary/20 text-primary font-medium"
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!isCollapsed && (
          <p className="text-xs text-muted-foreground text-center">
            © 2024 Ujwal Singh
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}