"use client";

/* eslint-disable no-irregular-whitespace */
import { ChangeEvent, FormEvent, useState } from "react";
import { alexandria, ubuntu } from "@/app/fonts";
import Input from "../Inputs/Input";
import { isNewsLetterFeatureReleased } from "@/constants/FeatureFlag.constants";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setEmail(value);
  };

  const submitEmailToNewsletter = async (email: string) => {
    const response = await fetch("/api/newsletter-subscription", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const content = await response.json();
    console.log(content, "dfsf");
  };

  const handleSubscribeNewsletter = (e: FormEvent) => {
    e.preventDefault();

    if (!email) return;
    // do the post request
    submitEmailToNewsletter(email);
  };

  if (isNewsLetterFeatureReleased) {
    return (
      <section className="px-4 md:p-0" data-testid="newsletter-section">
        <article className="mt-[72px] flex flex-col items-center justify-center gap-3 rounded-10 border border-[#7127BACC] bg-tertiary-bg px-6 pb-4 pt-6 text-center dark:border-none md:mt-25 md:gap-6">
          <h3
            className={`${alexandria.className} text-body2 font-semibold text-text-primary md:text-xl md:font-bold`}
          >
            Subscribe to my newsletter
          </h3>
          <p
            className={`${alexandria.className} text-caption2 font-light text-text-primary md:${ubuntu.className} leading-6 md:text-caption1`}
          >
            Monthly personal reading and updates on topics like tech, design,
            productivity, programming, and more!
          </p>

          <form
            className="flex w-full flex-col gap-4 px-4 sm:flex-row md:px-13"
            onSubmit={handleSubscribeNewsletter}
          >
            <div className="flex-[4]">
              <Input
                type="email"
                placeholder="your email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex-1">
              <button className="flex w-full items-center justify-center rounded-80 border border-primary px-4 py-2 text-body2 font-medium text-primary">
                Sign up
              </button>
            </div>
          </form>

          <span className="mt-3 text-caption2 font-light text-text-primary md:mb-7 md:mt-0">
            Join the 110 other readers.
          </span>
        </article>
      </section>
    );
  }

  if (!isNewsLetterFeatureReleased) return null;
};

export default Newsletter;
