import { mockLinks, mockStats } from "@/lib/data/affiliate";
import { LinkStatus } from "@/lib/types/affiliate";
import { useMemo, useState } from "react";

export function useAffiliateLinks() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<LinkStatus | "All">("All");

  const filteredLinks = useMemo(() => {
    return mockLinks.filter((link) => {
      const matchesSearch =
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter =
        activeFilter === "All" || link.status === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const counts = useMemo(() => {
    const tempCounts = {
      All: mockLinks.length,
      Active: 0,
      Paused: 0,
      Pending: 0,
      Rejected: 0,
    };
    mockLinks.forEach((link) => {
      if (tempCounts[link.status] !== undefined) {
        tempCounts[link.status]++;
      }
    });
    return tempCounts;
  }, []);
  return {
    stats: mockStats,
    links: filteredLinks,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    counts,
  };
}
