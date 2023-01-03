import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import down from '../../../images/nav/down.svg'
import up from '../../../images/nav/up.svg'
import Text from '../../atoms/Text'
type PROPS_STYLE = {
  showSubMenu: any
  isSubmenuVisible: any
  hideSubMenu: any
  pathname?: any
  mobile: boolean
}

export default function Nav(props: PROPS_STYLE) {
  const [hovering, setHovering] = useState('false')
  const { pathname } = useRouter()
  const NAV_ITEMS = [
    {
      name: 'Home',
      route: '/',
      subItems: [],
      active: pathname === '/',
    },
    {
      name: 'What is a VPN?',
      route: '/what-is-vpn',
      subItems: [],
      active: pathname === '/what-is-vpn',
    },
    {
      name: 'Resources',
      route: props.mobile ? '' : '',
      subItems: [
        {
          name: 'Blogs',
          route: '/blogs',
          comingSoon: false,
        },
      ],
    },
  ]
  return (
    <div
      className={
        'flex  flex-wrap items-center justify-center gap-3 md:ml-auto md:mr-12 md:flex-nowrap md:justify-end md:gap-12'
      }
    >
      {NAV_ITEMS.map((item) => (
        <div
          onMouseEnter={() => {
            props.showSubMenu(item.name)()
            setHovering(item.name)
          }}
          onMouseLeave={() => {
            setHovering('false')
          }}
          key={item.name}
          className={'relative w-full md:w-auto'}
        >
          <Link
            onClick={() => {
              if (props.isSubmenuVisible(item)) props.hideSubMenu()
              else props.showSubMenu(item.name)()
            }}
            href={item.route}
          >
            <div className={'flex w-full justify-between'}>
              <Text
                className={'text-[#2C090B] hover:!text-p1 ' + (item.active ? 'text-p1' : '')}
                text={item.name}
              />

              {item.subItems.length > 0 && (
                <Image
                  width={10}
                  src={props.isSubmenuVisible(item) ? up : down}
                  alt={'arrow'}
                  className={'md:hidden'}
                />
              )}
            </div>
            {(item.active || hovering === item.name) && (
              <div className={'z-100 absolute -bottom-0 hidden h-0.5 w-[11px]  bg-p1 md:block'} />
            )}
          </Link>
          {/*{item.underline&&<div className={'h-0.5 w-2.5 bg-black'}/>}*/}
          {props.isSubmenuVisible(item) && (
            <div
              className={
                ' z-50 mt-[14px] w-full rounded-[8px] border border-[1px] border-[rgba(185,152,219,0.3)] bg-white px-[8px] py-[10px] shadow-[0_2px_8px_rgba(117,131,142,0.08)] shadow-[0_20px_32px_rgba(52,60,68,0.16)] md:absolute md:w-[190px]'
              }
              onMouseLeave={props.hideSubMenu}
            >
              {item.subItems.map((subItem) => (
                <div
                  onMouseEnter={() => {
                    if (!subItem.comingSoon) setHovering(subItem.name)
                  }}
                  onMouseLeave={() => setHovering('false')}
                  key={subItem.name}
                  className={
                    'relative rounded bg-white px-[11px]   py-[4px] text-[20px]  md:text-[16px]'
                  }
                >
                  {!subItem.comingSoon && (
                    <Link href={subItem.route}>
                      <Text
                        className={hovering === subItem.name ? '!text-p1' : '!text-[#2C090B]'}
                        text={subItem.name}
                      />
                      {hovering === subItem.name && (
                        <div className={'z-100 absolute -bottom-0 h-0.5 w-[11px] bg-p1'} />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
