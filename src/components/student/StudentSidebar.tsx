import { 
  BookOpen, 
  User, 
  Repeat, 
  MessageSquare, 
  MapPin, 
  Library, 
  RotateCcw, 
  Flag,
  Plus,
  LogOut
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import booknestLogo from "@/assets/booknest-logo.png";

const menuItems = [
  { title: "Dashboard", url: "/student", icon: BookOpen },
  { title: "My Profile", url: "/student/profile", icon: User },
  { title: "Add Book", url: "/student/add-book", icon: Plus },
  { title: "My Books", url: "/student/my-books", icon: Library },
  { title: "Swap Requests", url: "/student/swap-requests", icon: Repeat },
  { title: "Chat", url: "/student/chat", icon: MessageSquare },
  { title: "Borrowed Books", url: "/student/borrowed", icon: Library },
  { title: "Return Book", url: "/student/return", icon: RotateCcw },
  { title: "Search by Area", url: "/student/search-area", icon: MapPin },
  { title: "Report", url: "/student/report", icon: Flag },
];

export function StudentSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={booknestLogo} 
            alt="BookNest" 
            className="h-8 w-8 object-contain"
          />
          {!collapsed && (
            <span className="font-serif text-xl font-bold text-foreground">
              Book<span className="text-gradient">Nest</span>
            </span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Student Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url} 
                      end 
                      className="flex items-center gap-3"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
