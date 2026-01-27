"use client";

import { Children, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExpandableListProps {
    children: React.ReactNode;
    initialCount: number;
    className?: string;
    buttonClassName?: string;
}

export function ExpandableList({
    children,
    initialCount,
    className,
    buttonClassName,
}: ExpandableListProps) {
    const [showAll, setShowAll] = useState(false);
    const items = Children.toArray(children);
    const visibleItems = showAll ? items : items.slice(0, initialCount);

    return (
        <>
            <div className={className}>{visibleItems}</div>

            {items.length > initialCount && (
                <div className={cn("mt-6 flex justify-center", buttonClassName)}>
                    <Button
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                        className="gap-2"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUpIcon className="size-4" />
                            </>
                        ) : (
                            <>
                                Show More <ChevronDownIcon className="size-4" />
                            </>
                        )}
                    </Button>
                </div>
            )}
        </>
    );
}
