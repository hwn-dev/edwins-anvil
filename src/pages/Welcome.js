import { Link } from 'react-router-dom'
import Title from '../components/Title'
import PageHeader from '../components/PageHeader'
import Intro from '../components/Intro/Intro'
const Welcome = () => {
  return (
    <>
      <div className='welcome-container'>
        <Intro className='intro' />
      </div>
    </>
  )
}

export default Welcome
