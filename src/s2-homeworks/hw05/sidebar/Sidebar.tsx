import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}
 
export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')
    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <div className={s.close_wrapp}>
                    <button className={s.close} onClick={handleClose}>
                        <img
                            src={closeIcon}
                            alt="close sidebar"
                            id={'hw5-menu-close'}
                        /> 
                    </button>
                </div>
 
                <nav id={'hw5-menu'} className={s.nav}>
                    <div>
                        <NavLink
                            end
                            id={'hw5-pre-junior-link'} 
                            to={PATH.PRE_JUNIOR}
                            onClick={handleClose}
                            className={({isActive}) => {return isActive ? s.active : ''}}
                        >
                            Pre-junior
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            end
                            id={'hw5-junior-link'}
                            to={PATH.JUNIOR}
                            onClick={handleClose}
                            className={({isActive}) => {return isActive ? s.active : ''}}
                        >
                            Junior
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            end
                            id={'hw5-junior-plus-link'}
                            to={PATH.JUNIOR_PLUS}
                            onClick={handleClose}
                            className={({isActive}) => {return isActive ? s.active : ''}}
                        >
                            Junior Plus
                        </NavLink>
                    </div>
                </nav>
            </aside>
        </>
    )
}
