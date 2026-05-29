import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/utils/utils';

interface VirtualizedListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  estimateSize?: number;
  height?: string | number;
  className?: string;
  itemClassName?: string;
}

/**
 * VirtualizedList component for efficient rendering of large lists.
 * Critical for performance on low-end mobile devices.
 */
export function VirtualizedList<T>({
  items,
  renderItem,
  estimateSize = 60,
  height = '400px',
  className,
  itemClassName
}: VirtualizedListProps<T>) {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateSize,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className={cn("overflow-auto outline-none", className)}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            className={itemClassName}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(items[virtualItem.index], virtualItem.index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(VirtualizedList) as typeof VirtualizedList;
