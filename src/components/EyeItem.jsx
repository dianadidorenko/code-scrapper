"use client";

import { updateProductViews } from "@/services/posts";
import { Eye } from "lucide-react";
import React from "react";
import { toast } from "./ui/use-toast";

const EyeItem = ({ id }) => {
  const updateViews = async () => {
    const res = await updateProductViews(id);
  };

  return (
    <div
      onClick={updateViews}
      className="flex items-center justify-center bg-white p-1.5 rounded-full cursor-pointer"
    >
      <Eye size={20} color="gray" />
    </div>
  );
};

export default EyeItem;
