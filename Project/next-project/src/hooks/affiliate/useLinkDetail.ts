import { affiliateApi } from "@/lib/api-client/affiliateApi";
import { LinkDetailFull } from "@/lib/types/affiliate";
import { useEffect, useState } from "react";

const initialLinkDetail: LinkDetailFull = {
  id: "",
  name: "",
  url: "",
  category: "",
  status: "Active",
  createdAt: "",
  clicks: 0,
  conversions: 0,
  earnings: "$0.00",
  chartData: [],
  trafficSources: [],
  description: "",
  approvedDate: "",
  approvedBy: "",
  commissionRate: "",
  lastClick: "",
  originalUrl: "",
};
export function useLinkDetail(id: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [link, setLink] = useState<LinkDetailFull>(initialLinkDetail);
  id ="AFL-001";

  useEffect (() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await affiliateApi.getLinkDetail(id);
        setLink(data);
      } catch (error) {
        console.error("Failed to fetch link detail:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { link, isLoading };
}
