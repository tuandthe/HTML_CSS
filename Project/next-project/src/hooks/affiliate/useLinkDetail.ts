import { affiliateApi } from "@/lib/api-client/affiliateApi";
import { NotFoundError } from "@/lib/errors/NotFoundError";
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
  id = "AFL-001";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await affiliateApi.getLinkDetail(id);
        setLink(data);
      } catch (error) {
        if (error instanceof NotFoundError) {
          return Response.json({ message: error.message }, { status: 404 });
        }
        console.error(error);
        return Response.json(
          { message: "Internal Server Error" },
          { status: 500 },
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { link, isLoading };
}
