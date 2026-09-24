import { ImageResponse } from 'next/og';

// Favicon sizes
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '6px',
        }}
      >
        {/* Inner darker circle for depth */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '26px',
            height: '26px',
            borderRadius: '5px',
            background: 'rgba(0,0,0,0.2)',
          }}
        >
          {/* ∞ symbol */}
          <span
            style={{
              fontSize: '18px',
              fontWeight: 900,
              color: '#fff1f1',
              lineHeight: 1,
              fontFamily: 'serif',
            }}
          >
            ∞
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
