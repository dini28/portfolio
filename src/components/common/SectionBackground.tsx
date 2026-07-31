'use client';

interface SectionBackgroundProps {
    variant?: 'default' | 'subtle';
    animated?: boolean;
}

const SectionBackground = ({ variant = 'default', animated = false }: SectionBackgroundProps) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Firecrawl Grid Texture with Crosshair Plus Marks */}
            <div
                className={`absolute inset-0 ${variant === 'subtle' ? 'opacity-[0.025]' : 'opacity-[0.04]'}`}
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0),
                        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px, 48px 48px, 48px 48px',
                    backgroundPosition: '-1px -1px'
                }}
            />

            {/* Dither Matrix Dot Stipple Overlay */}
            <div className="absolute inset-0 firecrawl-dither-bg opacity-30" />

            {/* Ambient Spotlight / Gradient Blobs */}
            <div
                className={`absolute top-20 right-20 w-[500px] h-[500px] rounded-full blur-[140px] ${
                    variant === 'subtle' ? 'bg-white/[0.02]' : 'bg-white/[0.04]'
                } ${animated ? 'animate-pulse' : ''}`}
                style={animated ? { animationDuration: '6s' } : undefined}
            />
            <div
                className={`absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full blur-[140px] ${
                    variant === 'subtle' ? 'bg-white/[0.015]' : 'bg-white/[0.03]'
                } ${animated ? 'animate-pulse' : ''}`}
                style={animated ? { animationDuration: '8s', animationDelay: '2s' } : undefined}
            />
        </div>
    );
};

export default SectionBackground;

