"use client";
import LoadingRound from "@/Loading/LoadingRound";
import DashboardTable from "@/components/dashboard/DashboardTable/DashboardTable";
import { useGetSmartWatchQuery } from "@/redux/api/smartWatchApi";
import React, { useState } from "react";

const EarbudsPage: React.FC = () => {
  const { data, isLoading } = useGetSmartWatchQuery(null);
  if (isLoading) {
    <LoadingRound />;
  }
  return (
    <div>
      <DashboardTable watchData={data?.data}  />
    </div>
  );
};

export default EarbudsPage;
