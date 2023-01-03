import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import arrow from '../../../images/nav/arrow.png'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Logo from '../../atoms/Logo'
import { NavModal } from '../../atoms/Modal'
import RevealAnimation from '../../atoms/RevealAnimation'
import Text from '../../atoms/Text'
import Wrapper from '../../atoms/Wrapper'
import Nav from '../Nav'
type PROPS_STYLE = {
  activeSubmenu: string
  setActiveSubmenu: Function
  displayWaitListForm: () => void
  pathname?: string
}

export default function NavigationBar(props: PROPS_STYLE) {
  const [sideBarActive, setSideBarActive] = useState(false)
  const [isTop, setIsTop] = useState(false)
  useEffect(() => {
    if (window.scrollY === 0) setIsTop(true)
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) setIsTop(true)
      else setIsTop(false)
    })
  }, [])
  function showSideBar() {
    //used to display sidebar by setting sideBarActive equal to true
    setSideBarActive(true)
  }

  function hideSideBar() {
    //used to hide sidebar by setting sideBarActive equal to false
    setSideBarActive(false)
  }

  function showSubMenu(route: string) {
    //used to display a nav submenu by setting activeSubmenu equal to that route
    return () => props.setActiveSubmenu(route)
  }

  function hideSubMenu() {
    //used to hide all nav submenu by setting activeSubmenu equal to ''
    props.setActiveSubmenu('')
  }

  function isSubmenuVisible(navItem: { name: string; subItems: any[] }) {
    //just a check if we should display a menu
    return navItem.name === props.activeSubmenu && navItem.subItems.length > 0
  }
  function displayWaitListForm() {
    setSideBarActive(false)
    props.displayWaitListForm()
  }
  return (
    <>
      <NavModal width={'80%'} onClose={hideSideBar} show={sideBarActive}>
        <div className={'absolute flex h-full w-full flex-col p-5'}>
          <span
            onClick={hideSideBar}
            className={
              'my-4 flex h-[41px] w-[41px] cursor-pointer items-center rounded-full border-[2px] border-black p-[8px]'
            }
          >
            <Image src={arrow} alt={'back arrow'} />
          </span>
          <Nav
            mobile={true}
            pathname={props.pathname}
            showSubMenu={showSubMenu}
            isSubmenuVisible={isSubmenuVisible}
            hideSubMenu={hideSubMenu}
          />
          <Button
            id={'navigation-bar-button-1'}
            onClick={displayWaitListForm}
            height={60}
            className={'m-0 mt-auto max-w-[202px+]'}
            variant={'outline'}
          >
            <Text className={'text-p1 hover:text-[#2C090B]'} text={'Get Early Access'} />
          </Button>
        </div>
      </NavModal>
      <Wrapper
        className={
          'fixed z-[40] w-full transition-colors duration-200 ease-in-out ' +
          (!isTop ? 'bg-white' : '')
        }
      >
        <Container className="flex items-center py-4 md:py-7 ">
          <RevealAnimation animation={'slide-right'}>
            <Logo />
          </RevealAnimation>
          <RevealAnimation animation={'fade'} className={'flex hidden flex-grow md:block'}>
            <Nav
              mobile={false}
              pathname={props.pathname}
              showSubMenu={showSubMenu}
              isSubmenuVisible={isSubmenuVisible}
              hideSubMenu={hideSubMenu}
            />
          </RevealAnimation>
          <RevealAnimation animation={'fade'}>
            <Button
              id={'navigation-bar-button-2'}
              onClick={displayWaitListForm}
              height={45}
              width={191}
              className={'hidden flex-shrink-0 md:block'}
              variant={'outline'}
            >
              <Text className={'!text-p1 hover:!text-[#2C090B]'} text={'Get Early Access'} />
            </Button>
          </RevealAnimation>
          <svg
            onClick={showSideBar}
            className={'ml-auto cursor-pointer md:hidden'}
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 30 30"
            width="25px"
            height="25px"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        </Container>
      </Wrapper>
    </>
  )
}
