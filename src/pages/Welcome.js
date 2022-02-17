import Title from '../components/Title'
import ScrollIndicator from '../components/ScrollIndicator'

const Welcome = () => {
  return (
    <div>
      <div className='container'>
        <a href='https://www.instagram.com/edwins_anvil/' target='_blank' rel='noreferrer'>
          <Title title='Edwins Anvil' />
        </a>
        <ScrollIndicator />
      </div>
      <div className='container second'>
        <Title title='Hello' />
      </div>
    </div>
  )
}

export default Welcome
