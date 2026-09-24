import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#db0000',
          borderRadius: '40px',
        }}
      >
        {/* Inner panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          {/* Infinity symbol */}
          <span
            style={{
              fontSize: '80px',
              fontWeight: 900,
              color: '#fff1f1',
              lineHeight: 1,
              fontFamily: 'serif',
            }}
          >
            ∞
          </span>
          {/* Brand name */}
          <span
            style={{
              fontSize: '22px',
              fontWeight: 800,
              color: 'rgba(255,241,241,0.75)',
              letterSpacing: '-0.5px',
              fontFamily: 'sans-serif',
            }}
          >
            InfinityBloods
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
