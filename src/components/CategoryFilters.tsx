
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CategoryFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const handleClearFilter = () => {
    onCategoryChange("All");
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <div className="flex-1 overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            category !== "All" && (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-4 py-1.5 text-sm cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary hover:bg-primary/90"
                    : "hover:bg-primary/10"
                }`}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </Badge>
            )
          ))}
        </div>
      </div>
      
      {activeCategory !== "All" && (
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1" 
          onClick={handleClearFilter}
        >
          <X size={14} />
          Clear filter
        </Button>
      )}
    </div>
  );
};

export default CategoryFilters;
