"use client";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import { MyBreadcrumb } from "./components/MyBreadcrumb";
import { MyCard } from "./components/MyCard";
import RunsChart from "./components/RunsChart";
import { TitleRow } from "./components/TitleRow";

export default function Runs() {
  return (
    <>
      <Header />
      {/* main container */}
      <div className="container mx-auto p-4">
        <MyBreadcrumb />
        <TitleRow />
        {/* Card Row */}
        <div className="grid grid-cols-4 gap-4">
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
        </div>
        <RunsChart />
        <DataTable />
      </div>
    </>
  );
}
