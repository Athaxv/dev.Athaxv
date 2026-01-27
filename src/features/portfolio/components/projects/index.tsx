import { ExpandableList } from "@/components/expandable-list";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <ExpandableList
          initialCount={4}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ExpandableList>
      </div>
    </Panel>
  );
}
