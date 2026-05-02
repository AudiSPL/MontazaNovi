import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const ctaVariants = cva(
  [
    "group relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-normal rounded-xl text-center outline-none",
    "transition-[transform,box-shadow,filter,border-color,background-color,color] duration-200 ease-out",
    "motion-reduce:transition-colors motion-reduce:hover:translate-y-0",
    "focus-visible:ring-2 focus-visible:ring-[hsl(var(--tool-yellow))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--graphite))]",
    "disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "border border-transparent bg-tool-yellow font-bold text-accent-foreground shadow-lg shadow-black/30",
          "hover:-translate-y-px hover:shadow-[0_12px_40px_-12px_rgba(242,165,50,0.45)] hover:brightness-[1.04]",
          "active:translate-y-0 active:brightness-[1.02]",
        ].join(" "),
        secondary: [
          "border border-primary-foreground/26 bg-black/18 font-semibold text-primary-foreground backdrop-blur-sm",
          "hover:-translate-y-px hover:border-tool-yellow/48 hover:bg-white/[0.07]",
          "active:translate-y-0 md:border-primary-foreground/22 md:bg-black/22 md:backdrop-blur-md",
        ].join(" "),
        ghost: [
          "rounded-lg border border-transparent bg-transparent px-2 py-2 font-medium text-primary-foreground/78 shadow-none",
          "hover:text-tool-yellow hover:brightness-[1.05]",
          "motion-reduce:hover:brightness-100",
          "focus-visible:bg-white/[0.06]",
        ].join(" "),
      },
      size: {
        sm: "min-h-9 gap-1.5 px-4 py-2 text-sm [&_svg]:size-[18px]",
        md: "min-h-[52px] gap-2 px-8 py-4 text-base [&_svg]:size-5",
        lg: "min-h-[54px] gap-2 px-8 py-4 text-base md:min-h-[52px] md:px-10 [&_svg]:size-5",
      },
    },
    compoundVariants: [
      { variant: "primary", size: "sm", class: "font-semibold" },
      { variant: "primary", size: "lg", class: "font-bold" },
      { variant: "secondary", size: "lg", class: "font-semibold" },
      { variant: "ghost", size: "sm", class: "min-h-8 px-2 py-1.5 text-sm [&_svg]:size-4" },
      {
        variant: "ghost",
        size: "md",
        class: "min-h-[44px] justify-start px-1 py-2 text-sm sm:min-h-[48px] sm:px-2 sm:text-base [&_svg]:size-[18px] sm:[&_svg]:size-[18px]",
      },
      { variant: "ghost", size: "lg", class: "min-h-[48px] px-2 py-2.5 text-base [&_svg]:size-5" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type CTAButtonShared = VariantProps<typeof ctaVariants> & {
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export type CTAButtonProps =
  | (CTAButtonShared & {
      href: string;
    } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">)
  | (CTAButtonShared & {
      href?: undefined;
    } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">);

function IconWrap({ slot, children }: { slot: "left" | "right"; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 transition-transform duration-200 motion-reduce:transition-none",
        slot === "left" &&
          "motion-reduce:group-hover:translate-x-0 group-hover:-translate-x-px",
        slot === "right" &&
          "motion-reduce:group-hover:translate-x-0 group-hover:translate-x-0.5",
      )}
      aria-hidden
    >
      {children}
    </span>
  );
}

export function CTAButton(props: CTAButtonProps) {
  const { variant, size, className, children, leftIcon, rightIcon, href, ...rest } = props;

  const classes = cn(ctaVariants({ variant, size }), className);

  const inner = (
    <>
      {leftIcon ? <IconWrap slot="left">{leftIcon}</IconWrap> : null}
      <span className="min-w-0 leading-snug">{children}</span>
      {rightIcon ? <IconWrap slot="right">{rightIcon}</IconWrap> : null}
    </>
  );

  if (href !== undefined) {
    const {
      target,
      rel,
      ...anchorProps
    } = rest as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

    const resolvedRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return (
      <a href={href} className={classes} target={target} rel={resolvedRel} {...anchorProps}>
        {inner}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "children"
  >;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {inner}
    </button>
  );
}
