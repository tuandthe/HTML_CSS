import { useState, useEffect, useMemo } from "react";
import { Ticket, CreateTicketDTO } from "@/lib/types/ticket";
import { ticketCategories } from "@/lib/data/tickets";
import { ticketApi } from "@/lib/api-client/ticketApi";
import { NotFoundError } from "@/lib/errors/NotFoundError";

export function useTickets() {
  // --- STATE ---
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false); // Loading khi tạo mới

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    setIsLoading(true);
    try {
      const data = await ticketApi.getAll();
      setTickets(data);
    } catch (error) {
      if (error instanceof NotFoundError) {
        return Response.json({ message: error.message }, { status: 404 });
      }
      console.error("Failed to fetch tickets:", error);
      return Response.json(
        { message: "Internal Server Error" },
        { status: 500 },
      );
    } finally {
      setIsLoading(false);
    }
  };

  // --- ACTIONS ---
  const handleCreateTicket = async (data: CreateTicketDTO) => {
    setIsCreating(true);
    try {
      await ticketApi.create(data);
      await fetchTickets();
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error("Failed to create ticket:", error);
      alert("Failed to create ticket");
    } finally {
      setIsCreating(false);
    }
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      // 1. Logic Search
      const query = searchQuery.toLowerCase();

      const matchesSearch =
        ticket.subject.toLowerCase().includes(query) ||
        ticket.id.toLowerCase().includes(query) ||
        ticket.priority.toLowerCase().includes(query) ||
        ticket.status.toLowerCase().includes(query) ||
        ticket.category?.toLowerCase().includes(query) ||
        ticket.orderId?.toLowerCase().includes(query);

      // 2. Logic Category
      const matchesCategory =
        selectedCategory === "All Categories" ||
        ticket.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [tickets, searchQuery, selectedCategory]);

  const counts = useMemo(() => {
    return {
      "All Categories": tickets.length,
      Payments: tickets.filter((t) => t.category === "Payments").length,
      Refunds: tickets.filter((t) => t.category === "Refunds").length,
      "Order Tracking": tickets.filter((t) => t.category === "Order Tracking")
        .length,
      Technical: tickets.filter((t) => t.category === "Technical").length,
      General: tickets.filter((t) => t.category === "General").length,
    };
  }, [tickets]);

  return {
    // Data
    filteredTickets,
    counts,
    categories: ticketCategories,

    // UI States
    isLoading,
    isCreating,
    searchQuery,
    selectedCategory,
    isCreateModalOpen,

    // Setters
    setSearchQuery,
    setSelectedCategory,
    setIsCreating,

    // Actions
    handleCreateTicket,
    refetch: fetchTickets,
  };
}
