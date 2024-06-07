"use client";
import LoadingRound from "@/Loading/LoadingRound";
import DashboardTable from "@/components/dashboard/DashboardTable/DashboardTable";
import { useGetSmartWatchQuery } from "@/redux/api/smartWatchApi";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const SmartWatchTable: React.FC = () => {
  const { data, isLoading } = useGetSmartWatchQuery(null);
  if (isLoading) {
    <LoadingRound />;
  }
  return (
    <div>
      <Link href="/dashboard/admin/smart-watch/add">
        <Button>Add Smart watch</Button>
      </Link>
      <DashboardTable watchData={data?.data} />
    </div>
  );
};

export default SmartWatchTable;
