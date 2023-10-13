"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import axios from "axios";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading;
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error: any) {
      setLoading;
      console.log("BILLING_ERROR", error);
    }
  };
  return (
    <Button
      variant={isPro ? "default" : "premium"}
      onClick={onClick}
      disabled={loading}
    >
      {isPro ? "Manage Subscription" : "Upgrade to Pro"}
      {!isPro && <Zap className="w-a h-4 ml-2 fill-white" />}
    </Button>
  );
};
