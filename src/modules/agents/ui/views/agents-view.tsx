"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

import { columns } from "../componenets/columns";
import { EmptyState } from "@/components/empty-state";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { DataPagination } from "../componenets/data-pagination";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/data-table";

export const AgentsView = () => {
  const router = useRouter();

  const [filters, setFilters] = useAgentsFilters();

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({ ...filters })
  );

  return (
    <div className="flex-1 pb-4 py-4 md:px-8 flex flex-col gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/agents/${row.id}`)}
      />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first AI Customer"
          description="Create an AI customer to practice sales calls. Each AI Customer will fallwo your instruction and interact with you."
        />
      )}
    </div>
  );
};

export const AgentsViewLoaading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Failed to load agents"
      description="Please try again later or contact support if the issue persists."
    />
  );
};
