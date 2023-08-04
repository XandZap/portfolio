"use client";
import Link from "next/link";
import Image from "next/image";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { links } from "@/utils/links";
import { Box, Description, GradientTitle, Section, Title } from "./ui/styles";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

function Projects() {
  return (
    <Section className="flex-col">
      <Title className="text-xl">Alguns projetos que criei</Title>
      <Box className="w-full m-0 grid grid-flow-row grid-cols-3 gap-4 max-lg:flex max-lg:overflow-x-scroll">
        {links.map((link) => (
          <Card
            key={link.name}
            className="relative overflow-hidden max-w-[500px] w-full min-h-[480px] text-accent max-lg:min-w-[250px]"
          >
            <CardHeader className="relative overflow-hidden h-[200px]">
              <Image src={link.imgUrl} alt="finanças" fill sizes="100%" />
            </CardHeader>
            <CardContent className="mt-5 text-accent">
              <div className="flex items-center justify-between">
                <Link href={link.url} target="_blank">
                  <GradientTitle className="flex items-center gap-2 text-accent duration-300 hover:text-secondary-foreground hover:scale-110">
                    {link.name}
                    <BsBoxArrowUpRight className="text-xs" />
                  </GradientTitle>
                </Link>
                {link.icon && <link.icon />}
                <Link href={link.github} target="_blank">
                  <BsGithub className=" duration-300 hover:text-primary hover:scale-x-125" />
                </Link>
              </div>
              <Description className="text-justify">{link.description}</Description>
            </CardContent>
            <CardFooter>{link.technologies}</CardFooter>
          </Card>
        ))}
      </Box>
    </Section>
  );
}

export default Projects;

