import { ImageResponse } from 'next/og'

export const alt = 'Jose Boullosa, arquitecto de plataformas de búsqueda y datos'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#19242b',
          color: '#f4f0e8',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px',
          width: '100%',
        }}
      >
        <div style={{ color: '#79d6bd', display: 'flex', fontSize: 24, letterSpacing: '0.18em' }}>
          JOSE BOULLOSA&nbsp;&nbsp;/&nbsp;&nbsp;PORTFOLIO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 72, fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1.02 }}>
          <span>Arquitecto de plataformas</span>
          <span style={{ color: '#79d6bd' }}>de búsqueda y datos</span>
        </div>
        <div style={{ borderTop: '2px solid #40505a', color: '#c2cbc9', display: 'flex', fontSize: 24, letterSpacing: '0.04em', paddingTop: 24 }}>
          Elasticsearch&nbsp;&nbsp;·&nbsp;&nbsp;Coveo&nbsp;&nbsp;·&nbsp;&nbsp;Observabilidad&nbsp;&nbsp;·&nbsp;&nbsp;IA
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
