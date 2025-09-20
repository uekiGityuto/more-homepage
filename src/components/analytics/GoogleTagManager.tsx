"use client";

import { GoogleTagManager as GTM } from "@next/third-parties/google";

interface GoogleTagManagerProps {
  gtmId: string;
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  return <GTM gtmId={gtmId} />;
}