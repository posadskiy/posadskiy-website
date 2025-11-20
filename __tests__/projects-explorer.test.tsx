import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectsExplorer } from "@/components/projects-explorer";

const projects = [
  {
    slug: "/projects/cost-accounting",
    title: "Cost Accounting",
    summary: "Fintech bot",
    icon: "/project-icons/cost-accounting-icon.png",
    tags: ["Fintech"],
    stack: [],
    role: "Principal",
    status: "Active",
  },
  {
    slug: "/projects/rest-security",
    title: "REST Security",
    summary: "Security lib",
    icon: "/project-icons/rest-security-icon.png",
    tags: ["Security"],
    stack: [],
    role: "Maintainer",
    status: "Community",
  },
] as any;

describe("ProjectsExplorer", () => {
  it("filters projects by tag", () => {
    render(<ProjectsExplorer projects={projects} />);

    expect(screen.getByText("Cost Accounting")).toBeInTheDocument();
    expect(screen.getByText("REST Security")).toBeInTheDocument();

    const securityFilter = screen.getByRole("button", { name: /Security/i });
    fireEvent.click(securityFilter);

    expect(screen.getByText("REST Security")).toBeInTheDocument();
    expect(screen.queryByText("Cost Accounting")).not.toBeInTheDocument();
  });
});

