import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { PatternSeparator } from "@/components/pattern-separator";
import { Separator } from "@/components/ui/separator";
import { GITHUB_USERNAME } from "@/config/site";
import { About } from "@/features/portfolio/components/about";
import { Blog } from "@/features/portfolio/components/blog";
import { Brand } from "@/features/portfolio/components/brand";
import { Certifications } from "@/features/portfolio/components/certifications";
import { Components } from "@/features/portfolio/components/components";
import { Experiences } from "@/features/portfolio/components/experiences";
import { GitHubContributions } from "@/features/portfolio/components/github-contributions";
import { Overview } from "@/features/portfolio/components/overview";
import { ProfileCover } from "@/features/portfolio/components/profile-cover";
import { ProfileHeader } from "@/features/portfolio/components/profile-header";
import { Projects } from "@/features/portfolio/components/projects";
import { RecentPrs } from "@/features/portfolio/components/recent-prs";
import { SocialLinks } from "@/features/portfolio/components/social-links";
import { TeckStack } from "@/features/portfolio/components/teck-stack";
import { TestimonialsMarquee } from "@/features/portfolio/components/testimonials-marquee";
import { USER } from "@/features/portfolio/data/user";
import { getGitHubData } from "@/lib/github";
import { cn } from "@/lib/utils";

export default async function Page() {
  const githubData = await getGitHubData(GITHUB_USERNAME);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="*:[[id]]:scroll-mt-22">
        <ProfileCover />
        <ProfileHeader />
        <PatternSeparator className="h-8 before:h-8" />

        <Overview />
        <PatternSeparator className="h-8 before:h-8" />

        <SocialLinks />
        <PatternSeparator className="h-8 before:h-8" />

        <About />
        <PatternSeparator />

        {/* <TestimonialsMarquee /> */}
        <PatternSeparator />

        <GitHubContributions contributions={githubData.contributions} />
        <PatternSeparator />

        {/* <TeckStack /> */}
        {/* <Separator /> */}

        {/* <Components /> */}
        <Separator />

        {/* <Blog /> */}
        <PatternSeparator />

        <Experiences />
        <PatternSeparator />
        <Separator />
        <Projects />
        <PatternSeparator />

        <RecentPrs prs={githubData.recentPrs} />
        <PatternSeparator />

        <Certifications />
        <PatternSeparator />

        {/* <Brand /> */}
        {/* <Separator /> */}
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}
