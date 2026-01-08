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
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:translate-x-1 group"
                      activeClassName="bg-primary/20 text-primary font-semibold shadow-md border border-primary/20"
                    >
                      <item.icon className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      {!isCollapsed && (
                        <span className="transition-colors duration-300">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
