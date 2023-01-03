import React, { useState } from 'react'

import Modal from '../../atoms/Modal'
import NavigationBar from '../../molecules/NavigationBar'
// import Footer from '../Footer'
import WaitListModal from '../WaitlistModal'

export default function Layout({
  children,
  displayWaitListForm,
  hideDisplayWaitListForm,
  showWaitListForm,
  pathname,
}: React.PropsWithChildren<{
  displayWaitListForm: any
  showWaitListForm: any
  hideDisplayWaitListForm: any
  pathname?: string
}>) {
  const [activeSubmenu, setActiveSubmenu] = useState('')
  const [success, setSuccess] = useState(false)
  function hideForm() {
    hideDisplayWaitListForm()
    setTimeout(() => setSuccess(false), 350)
  }
  return (
    <div className={'overflow-x-hidden font-inter'} onClick={() => setActiveSubmenu('')}>
      <Modal className={'!z-[100]'} width={'50%'} onClose={hideForm} show={showWaitListForm}>
        <WaitListModal success={success} setSuccess={setSuccess} close={hideForm} />
      </Modal>
      <NavigationBar
        pathname={pathname}
        displayWaitListForm={displayWaitListForm}
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
      />
      {children}
      {/*<Footer />*/}
    </div>
  )
}
