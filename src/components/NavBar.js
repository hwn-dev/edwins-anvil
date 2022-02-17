import { Link } from 'react-router-dom'

import PageButton from './PageButton'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <nav>
        <ul>
          <Link to='/'>
            <PageButton className={'nav-bar-button'} text='Home' />
          </Link>
          <Link to='/about'>
            <PageButton className={'nav-bar-button'} text='About' />
          </Link>
          <Link to='/portfolio'>
            <PageButton className={'nav-bar-button'} text='Portfolio' />
          </Link>
          <Link to='/shop'>
            <PageButton className={'nav-bar-button'} text='Shop' />
          </Link>
          <Link to='/contact'>
            <PageButton className={'nav-bar-button'} text='Contact' />
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
