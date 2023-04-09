import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "@/store/projects";
import { TbLayoutCards } from 'react-icons/tb'
import { ProjectCard } from "@/components/content/projects/ProjectCard";

const Projects = memo(() => {
  const projects = useRecoilValue(projectsAtom);

  return (
    <div>
      <main>
        <div className="layout">
          <div className="grid mx-8 mt-12 max-w-[820px] gap-4 mb:mx-0">
            <p className="text-[32px]">Projects</p>
            <p className="mb-8 italic opacity-50">
              Showcase of my projects on front-end development that I am proud
              of.
            </p>
            {projects.length && projects.map((project, index) => {
              return (
                <div key={project.category}>
                  <h1 className="text-[18px] text-[#555] dark:text-[#aaa]">{project.category}</h1>
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
});

export default Projects;
Projects.displayName = "Projects";
