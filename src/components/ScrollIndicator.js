const ScrollIndicator = (props) => {
  return (
    <div className='scroll-indicator'>
      <span className='icon' onClick={props.onClick}></span>
      <h3>Scroll Down</h3>
    </div>
  )
}

export default ScrollIndicator
