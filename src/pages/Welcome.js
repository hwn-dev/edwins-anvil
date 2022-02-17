import Title from '../components/Title'
import PageHeader from '../components/PageHeader'
import ScrollIndicator from '../components/ScrollIndicator'

const Welcome = () => {
  return (
    <>
      <PageHeader />
      <div className='container'>
        <a href='https://www.instagram.com/edwins_anvil/' target='_blank' rel='noreferrer'>
          <Title title='Edwins Anvil' />
        </a>
      </div>
      <div className='container second'>
        <Title title='Hello' />
      </div>
    </>
  )
}

export default Welcome
