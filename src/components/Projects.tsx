"use client";
import { Box, Section, Title } from "./ui/styles";
import { links } from "@/utils/links";
import Link from "next/link";

function Projects() {
  return (
    <Section className="flex-col">
      <Title>Alguns projetos que criei</Title>
      <Box className="w-full ">
        {links.map((link) => (
          <div key={link.name}>
            {link.icon && link.icon()}
            <Link href={link.url}>{link.name}</Link>
          </div>
        ))}
      </Box>
    </Section>
  );
}

export default Projects;

