"use client";

import { Ticket } from "@/lib/types/ticket";
import { useMemo, useState } from "react";

export function useTickets(initialTickets: Ticket[], categories: string[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [isCreating, setIsCreating] = useState(false);

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchCategory =
        selectedCategory === "All Categories" ||
        ticket.category === selectedCategory;

      const query = searchQuery.toLowerCase();

      const matchSearch =
        ticket.subject.toLowerCase().includes(query) ||
        ticket.id.toLowerCase().includes(query) ||
        ticket.priority.toLowerCase().includes(query) ||
        ticket.status.toLowerCase().includes(query) ||
        ticket.category?.toLowerCase().includes(query) ||
        ticket.orderId?.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [tickets, selectedCategory, searchQuery]);

  const counts = useMemo(() => {
    return categories.reduce(
      (acc, cat) => {
        if (cat === "All Categories") {
          acc[cat] = tickets.length;
        } else {
          acc[cat] = tickets.filter((t) => t.category === cat).length;
        }
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [tickets, categories]);

  const handleCreateTicket = (newTicketData: Ticket) => {
    setTickets([newTicketData, ...tickets]);
    setIsCreating(false);
    setSelectedCategory("All Categories");
    setSearchQuery("");
  };
  return {
    // State
    searchQuery,
    selectedCategory,
    isCreating,
    // Derived Data
    filteredTickets,
    counts,
    // Actions
    setSearchQuery,
    setSelectedCategory,
    setIsCreating,
    handleCreateTicket,
  };
}
