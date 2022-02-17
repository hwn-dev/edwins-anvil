import PageHeading from './PageHeading'
import NavBar from './NavBar'

export default function PageHeader() {
  return (
    <div className='page-header'>
      <PageHeading className='page-heading' title="Edwin's Anvil" />
      <NavBar />
    </div>
  )
}
