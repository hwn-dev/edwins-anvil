import aboutPic from '../assets/images/edwins-about.jpeg'

export default function About() {
  return (
    <div className='container'>
      <div className='bibliography-section'>
        <img src={aboutPic} alt='Edwin' />
        <div className='bibliography-copy'>
          <h2 className='bibliography-header'>About Edwin</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed, voluptate deserunt nostrum
            dignissimos rerum voluptatum debitis in veritatis, deleniti ullam ab iusto laudantium dolor
            ducimus maiores similique neque sunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed, voluptate deserunt nostrum
            dignissimos rerum voluptatum debitis in veritatis, deleniti ullam ab iusto laudantium dolor
            ducimus maiores similique neque sunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed, voluptate deserunt nostrum
            dignissimos rerum voluptatum debitis in veritatis, deleniti ullam ab iusto laudantium dolor
            ducimus maiores similique neque sunt?
          </p>
        </div>
      </div>
    </div>
  )
}
