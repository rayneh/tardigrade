function App() {
  const imageFilenames = ['level-1.jpg', 'level-2.jpg', 'level-3.jpg', 'level-4.jpg', 'level-5.jpg', 'level-6.jpg', 'level-7.jpg', 'level-8.jpg', 'level-9.jpg', 'level-10.jpg'];
  return (
    <>
      <div class="container">
        {imageFilenames.map((filename, index) => (
          <img key={index} src={'/' + filename} alt={`Image ${index}`} style={{ height: '100vh' }} />
        ))}
      </div>
    </>
  )
}

export default App
