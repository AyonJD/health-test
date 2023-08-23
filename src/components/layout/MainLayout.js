import Footer from '../shared/Footer'
import MainNav from '../shared/MainNav'
import PropTypes from 'prop-types'

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default function MainLayout({ children }) {
  return (
    <>
      <MainNav />
      <div>{children}</div>
      <Footer />
    </>
  )
}
