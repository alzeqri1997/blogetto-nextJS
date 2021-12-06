export default function notFound() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '60vh' }}>
      <div>
        <p
          style={{
            display: 'inline-block',
            paddingRight: '1rem',
            borderRight: '2px solid #333',
            fontSize: '1.5rem',
          }}
        >
          404
        </p>
        <p
          style={{
            display: 'inline-block',
            paddingLeft: '1rem',
            fontSize: '1.5rem',
          }}
        >
          {' '}
          page not found
        </p>
      </div>
    </div>
  )
}
