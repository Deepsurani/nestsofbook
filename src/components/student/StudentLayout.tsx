import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { StudentSidebar } from "./StudentSidebar";

const StudentLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <StudentSidebar />
        <SidebarInset className="flex-1">
          <header className="h-14 flex items-center gap-4 border-b border-border px-4 bg-background sticky top-0 z-10">
            <SidebarTrigger />
            <h1 className="font-serif text-lg font-semibold">Student Portal</h1>
          </header>
          <main className="p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default StudentLayout;
