"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DiscoverEventFilterProps {
  searchQuery: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
  handleCategoryChange: (value: string) => void;
  date: string;
  handleDateChange: (value: string) => void;
}

export const DiscoverEventFilter = ({
  searchQuery,
  handleSearchChange,
  category,
  handleCategoryChange,
  date,
  handleDateChange,
}: DiscoverEventFilterProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-center">
      <div className="flex-1">
        <Input
          placeholder="Search by event name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex gap-4">
        <Select onValueChange={handleCategoryChange} value={category}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Arts">Arts</SelectItem>
            <SelectItem value="Food">Food</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleDateChange} value={date}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
