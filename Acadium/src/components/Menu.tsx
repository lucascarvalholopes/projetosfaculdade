/*
    Curso de Engenharia de Software - UniEVANGÉLICA 
    Disciplina de Programação Web
    Projeto: Acadium 
    Devs:   Bruno Paiva - 2111579
            Gustavo Morais - 2111296
            João Pedro Braga Gomes- 2110157
            Luana Teixeira de Moraes - 2110867
            Lucas de Carvalho - 2110160
            Vanessa Nassar aji-2311987 
    26/03/2023 
*/
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { color_background2, color_primary, color_secundary } from "../styles/colors";
import '../styles/css/Menu.css';
import logo from '../assets/logo.svg';
import { HiArrowSmLeft, HiMenu, HiMenuAlt2 } from 'react-icons/hi';
import { IoApps } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import ScreenContext from "../contexts/ScreenSize/ScreenContext";
import { AuthContext } from "../contexts/Auth/AuthContext";

//Define um tipo para as opções do menu
type OptionsType = {
    id: number,
    title: string,
    to: string,
    icon: IconType
}

//Define as opções para o menu superior
const SuperiorOptions: OptionsType[] = [
    { id: 0, title: 'Apps', to: '/apps', icon: IoApps },
]

//Define as opções para o menu inferior
const LowerOptions: OptionsType[] = [
    
]

/*
    define um componente de menu que renderiza diferentes opções de menu com base no estado de showMenu
    e fornece funcionalidades de navegação por meio do hook useNavigate.
    O componente também usa o contexto AuthContext para exibir o nome do usuário e o contexto ScreenContext
    para obter a altura da tela. O menu se ajusta à largura da tela e apresenta diferentes estilos
    para a versão móvel e para a versão desktop. O código também define diferentes opções de menu como
    matrizes de objetos e usa essas opções para renderizar botões que executam a função handleOption quando clicados.
*/
export const Menu = ({ showMenu, setShowMenu }: { showMenu: boolean, setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const screenSize = useContext(ScreenContext);
    const handleOption = (to: string) => {
        setShowMenu(false);
        navigate(to);
    }

    return <>
        <section style={{
            height: 50,
            paddingLeft: 10,
            paddingRight: 10,
            width: '100%',
            backgroundColor: color_background2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <button type="button" className="btn btn-light" onClick={() => { setShowMenu(!showMenu) }}>
                {showMenu === false ? <HiMenu size={28} color={color_secundary} /> : <HiMenuAlt2 size={28} color={color_secundary} />}
            </button>
            <Link to="/" style={{width: isMobile ? '50%' : '20%'}}><img src={logo} alt="Acadium Logo" /></Link>
            <BrowserView>
                <button type="button" className="btn btn-light" style={{ display: 'flex', flexDirection: 'row', gap: 7 }}><label>Olá $User{user?.name}</label><FaUserAlt size={20} color={color_secundary} /></button>
            </BrowserView>
            <MobileView>
                <div />
            </MobileView>
        </section>
        <BrowserView>
            <section style={{
                display: showMenu === true ? undefined : 'none',
                backgroundColor: color_primary,
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: 200,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10
            }}>
                <div style={{ height: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <button type='button' onClick={() => setShowMenu(false)} style={{ background: 'none', border: 'none' }}>
                        <HiArrowSmLeft size={28} color={color_background2} />
                    </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: screenSize.height - 60 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {
                            SuperiorOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id}>
                                    <op.icon size={20} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {
                            LowerOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id}>
                                    <op.icon size={20} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                </div>
            </section>
        </BrowserView>
        <MobileView>
            <section style={{
                display: showMenu === true ? undefined : 'none',
                backgroundColor: color_primary,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10
            }}>
                <div style={{ height: 50, display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center' }}>
                    <button type="button" className="btn-close" aria-label="Close" style={{ backgroundColor: color_background2 }} onClick={() => setShowMenu(false)}></button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: screenSize.height - 60 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {
                            SuperiorOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id} style={{ fontSize: 'large', gap: 10 }}>
                                    <op.icon size={24} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {
                            LowerOptions.map(op => {
                                return <button type='button' className="buttonOptionMenu" onClick={() => handleOption(op.to)} title={op.title} key={op.id} style={{ fontSize: 'large', gap: 10 }}>
                                    <op.icon size={24} color='#fff' />
                                    <label>{op.title}</label>
                                </button>
                            })
                        }
                    </div>
                </div>
            </section>
        </MobileView>
    </>
}