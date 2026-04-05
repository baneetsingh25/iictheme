export type ApiEnvelope<T> = {
  success: boolean;
  message?: string;
  data: T;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
  };
};

export type DashboardMetrics = {
  visitorsLast30Days: number;
  totalEvents: number;
  eventRegistrations: number;
  pendingQueries: number;
  activeMembers: number;
  recentSubmissions: number;
};
