"use client";
import tw from "tailwind-styled-components";
import Link from "next/link";
import styled from "styled-components";

export const Section = tw.section`
  flex 
  justify-between 
  py-28
  max-lg:px-3
  max-lg:py-16
  max-lg:flex-col
  max-lg:text-base
  max-lg:gap-5
`;

export const Box = tw.div`
relative
p-4
before:rounded-tl-md 
before:absolute 
before:top-0 
before:left-0 
before:w-1/3 
before:h-1/2 
before:border-t-2 
before:border-l-2
max-lg:w-full
`;

export const Title = tw.p`
leading-8 
text-secondary-foreground 
text-xl
max-lg:text-base
`;

export const GradientTitle = tw.p`
text-transparent bg-clip-text bg-gradient-to-b from-accent to-secondary-foreground
`;

export const SLink = tw(
  Link
)`flex items-center gap-2 duration-300 hover:text-secondary-foreground hover:scale-x-110`;

export const Text = tw.p`
w-3/4
text-xl 
leading-8
text-justify
max-lg:w-full
max-lg:text-base
`;

export const Description = styled.p`
  @media (max-width: 1023px) {
    text-align: left;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

