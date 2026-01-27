export function BackgroundGrid() {
    return (
        <div
            className="fixed inset-0 -z-1 pointer-events-none"
            style={{
                backgroundImage: `
          linear-gradient(to right, var(--color-border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
        `,
                backgroundSize: "4rem 4rem",
                maskImage:
                    "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                WebkitMaskImage:
                    "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                opacity: 0.4,
            }}
        />
    );
}
