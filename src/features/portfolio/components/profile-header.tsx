import { USER } from "@/features/portfolio/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="flex flex-col border-x border-edge bg-background pb-4 relative z-10 screen-line-after">
      <div className="flex items-start px-4">
        <div className="relative -mt-[15%] sm:-mt-[12%] md:-mt-[15%]">
          <div className="rounded-full bg-background p-1 select-none">
            <img
              className="size-32 rounded-full object-cover sm:size-36"
              alt={`${USER.displayName}'s avatar`}
              src={USER.avatar}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="mt-3 px-4">
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-xl font-bold leading-none sm:text-2xl">
              {USER.displayName}
            </h1>
            <VerifiedIcon
              className="size-5 text-info select-none"
              aria-label="Verified"
            />
            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>
          <div className="text-muted-foreground">@{USER.username}</div>
        </div>

        <div className="mt-4">
          <FlipSentences
            className="text-balance text-sm sm:text-base"
            variants={{
              initial: { y: -10, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: 10, opacity: 0 },
            }}
          >
            {USER.flipSentences}
          </FlipSentences>
        </div>
      </div>
    </div>
  );
}
