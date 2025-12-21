import { useState, useEffect, useMemo } from "react";
import { LinkStatus, ReferralLinkDetail, LinkStats } from "@/lib/types/affiliate";
import { affiliateApi } from "@/lib/api-client/affiliateApi";

const initialStats: LinkStats = {
  clicks: 0,
  conversions: 0,
  earnings: "$0.00",
};

export function useAffiliateLinks() {
  const [links, setLinks] = useState<ReferralLinkDetail[]>([]);
  const [stats, setStats] = useState<LinkStats>(initialStats);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<LinkStatus | "All">("All");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await affiliateApi.getLinksPageData();
        setLinks(data.links);
        setStats(data.stats);
      } catch (error) {
        console.error("Failed to fetch links:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const matchesSearch =
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        activeFilter === "All" || link.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [links, searchQuery, activeFilter]); 

  const counts = useMemo(() => {
    const tempCounts: Record<string, number> = {
      All: links.length,
      Active: 0,
      Paused: 0,
      Pending: 0,
      Rejected: 0,
    };

    links.forEach((link) => {
      if (tempCounts[link.status] !== undefined) {
        tempCounts[link.status]++;
      }
    });

    return tempCounts;
  }, [links]);

  return {
    links: filteredLinks, 
    stats,                
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    counts,
    isLoading,            
  };
}