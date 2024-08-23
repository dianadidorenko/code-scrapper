"use client";

import FormInput from "@/components/FormInput";
import FormSubmit from "@/components/FormSubmit";
import { toast } from "@/components/ui/use-toast";
import { UploadButton } from "@/lib/uploadthing";
import { register } from "@/utils/actions";
import React, { useState } from "react";

const SignupPage = () => {
  const [image, setImage] = useState("");

  const onSubmit = async (formData) => {
    const res = await register(formData, image);

    if (res?.error) {
      toast({ title: res.error });
    } else toast({ title: res.message });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen bg-[#cbe3e9]">
        <img src="./signup.png" alt="signup" />
      </div>
      <div className="p-[15%] bg-white">
        <h1 className="text-2xl font-medium">Create an account</h1>
        <form action={onSubmit}>
          <FormInput
            id="name"
            label="Full Name"
            placeholder="Enter your name"
            type="text"
            className="h-10"
          />
          <FormInput
            id="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            className="h-10"
          />
          <FormInput
            id="password"
            label="Password"
            placeholder="Enter the password"
            type="password"
            className="h-10 mb-10"
          />
          <UploadButton
            endpoint="imageUploader"
            appearance={{
              button:
                "ut-uploading:cursor-not-allowed bg-slate-600 w-full text-xs after:bg-orange-400 max-w-[700px] mt-5 h-8",
              allowedContent: "hidden",
            }}
            onClientUploadComplete={(res) => {
              setImage(res[0].url);
            }}
            onUploadError={(error) => {
              alert(`ERROR ${error.message}`);
            }}
          />
          <FormSubmit className="w-full bg-red-500 text-white h-8 hover:bg-red-400 mt-5">
            Create
          </FormSubmit>
        </form>

        <p className="mt-6 text-center text-sm">
          Verify code was sent on your email
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
