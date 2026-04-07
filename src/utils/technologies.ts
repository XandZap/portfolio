export const technologyCategories = [
  {
    name: "Frontend",
    technologies: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Styled Components', 'Bootstrap', 'Chakra UI'],
  },
  {
    name: "Backend",
    technologies: ['Node.js', 'GraphQL', 'REST', 'Firebase'],
  },
  {
    name: "Ferramentas",
    technologies: ['Git', 'GitHub'],
  },
]

export const technologies = technologyCategories.flatMap((c) => c.technologies);
