import { PokeballFilled } from "@/components/pokeball";
import { CirclePoundSterling, Layers, Plug } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
};

const projects: {
  id: number;
  icon: React.ReactNode;
  name: React.ReactNode;
  description: string;
  href: string;
}[] = [
  {
    id: 0,
    icon: <Layers className="size-5" />,
    name: "Hub-Aware HNSW",
    description: "A hub-aware HNSW index for efficient similarity search.",
    href: "https://github.com/tmacsmee/part-4-project",
  },
  {
    id: 1,
    icon: <CirclePoundSterling className="size-5" />,
    name: "Coin Detector",
    description: "Detects coins in images using computer vision.",
    href: "https://github.com/tmacsmee/coin-detector",
  },
  {
    id: 2,
    icon: <PokeballFilled className="size-5" />,
    name: "Pokémon Expert Agent",
    description: "An expert agent for Pokémon Showdown",
    href: "https://github.com/tmacsmee/pokemon-expert-agent",
  },
  {
    id: 3,
    icon: <PokeballFilled className="size-5" />,
    name: "Pokémon Reinforcement Learning Agent",
    description: "A reinforcement learning agent for Pokémon Showdown",
    href: "https://github.com/tmacsmee/pokemon-rl-agent",
  },
  {
    id: 4,
    icon: <Plug className="size-5" />,
    name: "Sockchat",
    description: "A command line chat application using sockets.",
    href: "https://github.com/tmacsmee/sockchat",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-6">Some stuff I&apos;ve worked on.</p>

      <ul className="mt-12 flex flex-col gap-y-14">
        {projects.map(({ id, icon, name, description, href }) => (
          <li key={id}>
            <Link
              href={href}
              target="_blank"
              className="flex gap-x-1.5 items-center text-stone-800 hover:text-stone-700"
            >
              {icon}
              <h2 className="text-lg font-semibold">{name}</h2>
            </Link>
            <p className="mt-3 text-stone-700">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
