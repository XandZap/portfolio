import tw from "tailwind-styled-components";

export const Section = tw.section`
  flex 
  justify-between 
  py-28
`;

export const Box = tw.div`
relative
p-4
before:rounded-tl-md before:absolute before:top-0 before:left-0 before:w-1/3 before:h-1/2 before:border-t-2 before:border-l-2
`;

export const Title = tw.p`
leading-8 text-secondary-foreground 
`;

