"use client";
import NewTicketForm from "@/components/tickets/NewTicketForm";
import TicketCard from "@/components/tickets/TicketCard";
import TicketFilterBar from "@/components/tickets/TicketFilterBar";
import { Card } from "@/components/common/Card";
import { ticketCategories, ticketsData } from "@/lib/data/tickets";
import { MessageSquareOff, Plus } from "lucide-react";
import { useTickets } from "@/hooks/tickets/useTickets";

export default function TicketsPage() {
  const {
    searchQuery,
    selectedCategory,
    isCreating,
    filteredTickets,
    counts,
    setSearchQuery,
    setSelectedCategory,
    setIsCreating,
    handleCreateTicket,
  } = useTickets(ticketsData, ticketCategories);

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Support Tickets
          </h2>
          <p className="text-gray-500">
            Get help with your orders and account.
          </p>
        </div>
        {/* New Ticket Button */}
        <button
          onClick={() => setIsCreating(true)}
          disabled={isCreating}
          className="flex items-center gap-2 bg-[#007042] hover:bg-[#005c36] text-white px-5 py-2.5 rounded-2xl font-bold text-sm transition-colors shadow-sm"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">New Ticket</span>
          <span className="sm:hidden">New</span>
        </button>
      </div>
      {/* Search & Filter Bar */}
      <TicketFilterBar
        categories={ticketCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        counts={counts}
      />
      {/* New Ticket Form */}
      {isCreating && (
        <NewTicketForm
          onCancel={() => setIsCreating(false)}
          onSubmit={handleCreateTicket}
        />
      )}
      {/* Ticket List */}
      <Card className="overflow-hidden border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-white">
          <h3 className="font-semibold text-gray-900 text-base">
            Your Tickets
          </h3>
        </div>

        <div className="bg-white">
          {filteredTickets.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="bg-gray-50 p-4 rounded-full mb-4">
                <MessageSquareOff size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                No tickets found
              </h3>
              <p className="text-gray-500 text-center max-w-md mb-2">
                You don&apos;t have any tickets matching the current filter.
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
