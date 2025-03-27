'use client';
import React from 'react';
import { StyledComponentsRegistry } from './StyledComponentsRegistry';

export function Providers({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

