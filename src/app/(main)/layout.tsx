"use client";

import SideBar from "./components/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-8 h-full">
      <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-4">
        <SideBar />
        <main className="col-span-4 lg:col-span-3">{children}</main>
      </div>
    </div> );
};

export default MainLayout;
