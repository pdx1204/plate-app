'use client';

import React from 'react';
import { cn, withRef } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common';

export const BlockquoteElement = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement
        ref={ref}
        asChild
        className={cn(
          'my-1 rounded-sm border p-3 hover:border-[#FE6610]',
          className
        )}
        {...props}
      >
        <blockquote>{children}</blockquote>
      </PlateElement>
    );
  }
);
