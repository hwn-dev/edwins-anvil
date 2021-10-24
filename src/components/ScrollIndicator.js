const ScrollIndicator = () => {
  const handleClick = () => {
    alert('Clicked')
  }

  return (
    <div className='scroll-indicator'>
      <span className='icon' onClick={handleClick}></span>
      <h3>Scroll Down</h3>
    </div>
  )
}

export default ScrollIndicator
