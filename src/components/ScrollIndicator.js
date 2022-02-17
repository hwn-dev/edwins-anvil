const ScrollIndicator = (props) => {
  return (
    <div className='scroll-indicator' onClick={props.onClick}>
      <span className='icon' />
      <h3>Scroll Down</h3>
    </div>
  )
}

export default ScrollIndicator
