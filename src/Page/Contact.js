import React from 'react'
import './Contact.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
   <>
   <div className="bg-container">
                <Navbar />
                <span className="page-two-span">
                    <span className="span-display-block">
                        <h2>Contact me</h2>
                    </span>
                </span>

                <div className="page-three-section1">
                    <div className="col">
                        <div className="Contact-page-card-left">

                            <div className="colum">


                                <motion.span 
                                initial={{x:200}}
                                transition={{duration:1.9,delay:2}}
                                animate={{x:0}} className="Contact-flex">
                                    <div className="Contact-inner-card1" >
                                        <span className="about-inner-img">
                                            {/* <a href="mailto:ajayanandrao@outlook.com"> */}
                                            {/* <i className="material-icons">forward_to_inbox</i> */}
                                            {/* <i className="fa-solid fa-envelope"></i> */}
                                            <img className='email' src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZGF0YS1uYW1lPSJMYXllciAxIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiNlYTQ0MzUiIGQ9Ik0xNi41OCwxOS4xMDY4bC0xMi42OS04LjA3NTdBMywzLDAsMCwxLDcuMTEwOSw1Ljk3bDkuMzEsNS45MjQzTDI0Ljc4LDYuMDQyOEEzLDMsMCwwLDEsMjguMjIsMTAuOTU3OVoiLz48cGF0aCBmaWxsPSIjMDBhYzQ3IiBkPSJNMjUuNSw1LjVoNGEwLDAsMCwwLDEsMCwwdjE4YTMsMywwLDAsMS0zLDNoMGEzLDMsMCwwLDEtMy0zVjcuNWEyLDIsMCwwLDEsMi0yWiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDI2LjUgMTYpIi8+PHBhdGggZmlsbD0iI2ZmYmEwMCIgZD0iTTI5LjQ1NjIsOC4wNjU2Yy0uMDA4OC0uMDYtLjAwODEtLjEyMTMtLjAyMDYtLjE4MTItLjAxOTItLjA5MTgtLjA1NDktLjE3NjYtLjA4MjMtLjI2NTJhMi45MzEyLDIuOTMxMiwwLDAsMC0uMDk1OC0uMjk5M2MtLjAyLS4wNDc1LS4wNTA4LS4wODkyLS4wNzM1LS4xMzU0QTIuOTgzOCwyLjk4MzgsMCwwLDAsMjguOTY4Niw2LjhjLS4wNC0uMDU4MS0uMDktLjEwNzYtLjEzNDItLjE2MjZhMy4wMjgyLDMuMDI4MiwwLDAsMC0uMjQ1NS0uMjg0OWMtLjA2NjUtLjA2NDctLjE0MjMtLjExODgtLjIxNDYtLjE3NzFhMy4wMiwzLjAyLDAsMCwwLS4yNC0uMTg1N2MtLjA3OTMtLjA1MTgtLjE2NjEtLjA5MTctLjI1LS4xMzU5LS4wODg0LS4wNDYxLS4xNzUtLjA5NjMtLjI2Ny0uMTMzMS0uMDg4OS0uMDM1OC0uMTgzNy0uMDU4Ni0uMjc2Ni0uMDg1OXMtLjE4NTMtLjA2LS4yODA3LS4wNzc3YTMuMDU0MywzLjA1NDMsMCwwLDAtLjM1Ny0uMDM2Yy0uMDc1OS0uMDA1My0uMTUxMS0uMDE4Ni0uMjI3My0uMDE4YTIuOTc3OCwyLjk3NzgsMCwwLDAtLjQyMTkuMDQyNWMtLjA1NjMuMDA4NC0uMTEzLjAwNzctLjE2ODkuMDE5M2EzMy4yMTEsMzMuMjExLDAsMCwwLS41NjQ1LjE3OGMtLjA1MTUuMDIyLS4wOTY2LjA1NDctLjE0NjUuMDc5NUEyLjkwMSwyLjkwMSwwLDAsMCwyMy41LDguNXY1Ljc2Mmw0LjcyLTMuMzA0M2EyLjg4NzgsMi44ODc4LDAsMCwwLDEuMjM1OS0yLjg5MjNaIi8+PHBhdGggZmlsbD0iIzQyODVmNCIgZD0iTTUuNSw1LjVoMGEzLDMsMCwwLDEsMywzdjE4YTAsMCwwLDAsMSwwLDBoLTRhMiwyLDAsMCwxLTItMlY4LjVhMywzLDAsMCwxLDMtM1oiLz48cGF0aCBmaWxsPSIjYzUyNTI4IiBkPSJNMi41NDM5LDguMDY1NmMuMDA4OC0uMDYuMDA4MS0uMTIxMy4wMjA2LS4xODEyLjAxOTItLjA5MTguMDU0OS0uMTc2Ni4wODIzLS4yNjUyQTIuOTMxMiwyLjkzMTIsMCwwLDEsMi43NDI2LDcuMzJjLjAyLS4wNDc1LjA1MDgtLjA4OTIuMDczNi0uMTM1NEEyLjk3MTksMi45NzE5LDAsMCwxLDMuMDMxNiw2LjhjLjA0LS4wNTgxLjA5LS4xMDc2LjEzNDItLjE2MjZhMy4wMjcyLDMuMDI3MiwwLDAsMSwuMjQ1NC0uMjg0OWMuMDY2NS0uMDY0Ny4xNDIzLS4xMTg4LjIxNDctLjE3NzFhMy4wMDA1LDMuMDAwNSwwLDAsMSwuMjQtLjE4NTdjLjA3OTMtLjA1MTguMTY2MS0uMDkxNy4yNS0uMTM1OUEyLjk3NDcsMi45NzQ3LDAsMCwxLDQuMzgyOSw1LjcyYy4wODktLjAzNTguMTgzOC0uMDU4Ni4yNzY2LS4wODU5cy4xODUzLS4wNi4yODA3LS4wNzc3YTMuMDU2NSwzLjA1NjUsMCwwLDEsLjM1Ny0uMDM2Yy4wNzYtLjAwNTMuMTUxMS0uMDE4Ni4yMjczLS4wMThhMi45NzYzLDIuOTc2MywwLDAsMSwuNDIxOS4wNDI1Yy4wNTYzLjAwODQuMTEzLjAwNzcuMTY5LjAxOTNhMi45MDU2LDIuOTA1NiwwLDAsMSwuMjg2LjA4ODgsMi45MTU3LDIuOTE1NywwLDAsMSwuMjc4NS4wODkyYy4wNTE0LjAyMi4wOTY1LjA1NDcuMTQ2NS4wNzk1YTIuOTc0NSwyLjk3NDUsMCwwLDEsLjM3NDIuMjFBMi45OTQzLDIuOTk0MywwLDAsMSw4LjUsOC41djUuNzYyTDMuNzgsMTAuOTU3OUEyLjg4OTEsMi44ODkxLDAsMCwxLDIuNTQzOSw4LjA2NTZaIi8+PC9zdmc+"/>
                                            </span>
                                        <span className="about-inner-text">
                                            Email </span>ajayanandrao@outlook.com
                                    </div>
                                </motion.span>

                                <motion.span
                                transition={{duration:1.6, delay:1.5}} 
                                initial={{x:200}}
                                animate={{x:0}}
                                className="Contact-flex">
                                    <div className="Contact-inner-card1" >
                                        <span className="about-inner-img">
                                            {/* <i className="fa-brands fa-facebook-messenger" style={{fontSize: "22px"}}></i> */}
                                            {/* <i className="fa-solid fa-message"></i> */}
                                            <img className='messenger' src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjE5LjI0NyUiIGN5PSI5OS40NjUlIiByPSIxMDguOTYlIiBmeD0iMTkuMjQ3JSIgZnk9Ijk5LjQ2NSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwOUYiLz48c3RvcCBvZmZzZXQ9IjYwLjk3NSUiIHN0b3AtY29sb3I9IiNBMDMzRkYiLz48c3RvcCBvZmZzZXQ9IjkzLjQ4MiUiIHN0b3AtY29sb3I9IiNGRjUyODAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRjcwNjEiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIvPjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik01MTIsMTIyIEMyODYuNjY4LDEyMiAxMTIsMjg3LjA1NiAxMTIsNTEwIEMxMTIsNjI2LjYxNDQgMTU5Ljc5Miw3MjcuMzgyNCAyMzcuNjIyNCw3OTYuOTg0IEMyNDQuMTU2LDgwMi44MzIgMjQ4LjEsODExLjAyNCAyNDguMzY4LDgxOS43OTIgTDI1MC41NDY0LDg5MC45NDQgQzI1MS4yNDI0LDkxMy42NCAyNzQuNjg1Niw5MjguNDA4IDI5NS40NTM2LDkxOS4yNCBMMzc0Ljg0OCw4ODQuMTkyIEMzODEuNTc4NCw4ODEuMjI0IDM4OS4xMiw4ODAuNjcyIDM5Ni4yMTIsODgyLjYyNCBDNDMyLjY5Niw4OTIuNjU2IDQ3MS41MjY0LDg5OCA1MTIsODk4IEM3MzcuMzMyLDg5OCA5MTIsNzMyLjk0NCA5MTIsNTEwIEM5MTIsMjg3LjA1NiA3MzcuMzMyLDEyMiA1MTIsMTIyIFoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjcxLjgwMTYsNjIzLjQ2ODggTDM4OS4zMDE2LDQzNy4wNTI4IEM0MDcuOTkyLDQwNy4zOTY4IDQ0OC4wMTYsNDAwLjAxMjggNDc2LjA2LDQyMS4wNDQ4IEw1NjkuNTEzNiw0OTEuMTM1MiBDNTc4LjA4OCw0OTcuNTY3MiA1ODkuODg1Niw0OTcuNTMyOCA1OTguNDI0LDQ5MS4wNTI4IEw3MjQuNjM3NiwzOTUuMjY0OCBDNzQxLjQ4NCwzODIuNDgwOCA3NjMuNDczNiw0MDIuNjQwOCA3NTIuMiw0MjAuNTMxMiBMNjM0LjcsNjA2Ljk0ODggQzYxNi4wMDgsNjM2LjYwMzIgNTc1Ljk4NCw2NDMuOTg4OCA1NDcuOTQxNiw2MjIuOTU1MiBMNDU0LjQ4NTYsNTUyLjg2MzIgQzQ0NS45MTIsNTQ2LjQzMjggNDM0LjExMzYsNTQ2LjQ2NzIgNDI1LjU3Niw1NTIuOTQ3MiBMMjk5LjM2MTYsNjQ4LjczNTIgQzI4Mi41MTYsNjYxLjUxODQgMjYwLjUyNTYsNjQxLjM1ODQgMjcxLjgwMTYsNjIzLjQ2ODggWiIvPjwvZz48L3N2Zz4="/>
                                        </span>
                                        <span className="about-inner-text">
                                            Message </span>Microsoft Teams
                                    </div>
                                </motion.span>
                                <motion.span
                                transition={{duration:1.3, delay:1}}
                                initial={{x:200,}}
                                animate={{x:0}}
                                className="Contact-flex">
                                    <div className="Contact-inner-card1" >
                                        <span className="about-inner-img">
                                            {/* <i className="material-icons" style={{fontSize:"24px"}}>whatsapp</i> */}
                                            {/* <i className="fa-brands fa-whatsapp"></i> */}
                                            <img className='whatsapp' src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI0ODkiIGhlaWdodD0iMjUwMCIgdmlld0JveD0iMCAwIDEyMTkuNTQ3IDEyMjUuMDE2Ij48cGF0aCBmaWxsPSIjRTBFMEUwIiBkPSJNMTA0MS44NTggMTc4LjAyQzkyNy4yMDYgNjMuMjg5IDc3NC43NTMuMDcgNjEyLjMyNSAwIDI3Ny42MTcgMCA1LjIzMiAyNzIuMjk4IDUuMDk4IDYwNi45OTFjLS4wMzkgMTA2Ljk4NiAyNy45MTUgMjExLjQyIDgxLjA0OCAzMDMuNDc2TDAgMTIyNS4wMTZsMzIxLjg5OC04NC40MDZjODguNjg5IDQ4LjM2OCAxODguNTQ3IDczLjg1NSAyOTAuMTY2IDczLjg5NmguMjU4LjAwM2MzMzQuNjU0IDAgNjA3LjA4LTI3Mi4zNDYgNjA3LjIyMi02MDcuMDIzLjA1Ni0xNjIuMjA4LTYzLjA1Mi0zMTQuNzI0LTE3Ny42ODktNDI5LjQ2M3ptLTQyOS41MzMgOTMzLjk2M2gtLjE5N2MtOTAuNTc4LS4wNDgtMTc5LjQwMi0yNC4zNjYtMjU2Ljg3OC03MC4zMzlsLTE4LjQzOC0xMC45My0xOTEuMDIxIDUwLjA4MyA1MS0xODYuMTc2LTEyLjAxMy0xOS4wODdjLTUwLjUyNS04MC4zMzYtNzcuMTk4LTE3My4xNzUtNzcuMTYtMjY4LjUwNC4xMTEtMjc4LjE4NiAyMjYuNTA3LTUwNC41MDMgNTA0Ljg5OC01MDQuNTAzIDEzNC44MTIuMDU2IDI2MS41MTkgNTIuNjA0IDM1Ni44MTQgMTQ3Ljk2NSA5NS4yODkgOTUuMzYgMTQ3LjcyOCAyMjIuMTI4IDE0Ny42ODggMzU2Ljk0OC0uMTE4IDI3OC4xOTUtMjI2LjUyMiA1MDQuNTQzLTUwNC42OTMgNTA0LjU0M3oiLz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjA5Ljc3IiB5MT0iMTE5MC4xMTQiIHgyPSI2MDkuNzciIHkyPSIyMS4wODQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzIwYjAzOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzYwZDY2YSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTI3Ljg3NSAxMTkwLjExNGw4Mi4yMTEtMzAwLjE4Yy01MC43MTktODcuODUyLTc3LjM5MS0xODcuNTIzLTc3LjM1OS0yODkuNjAyLjEzMy0zMTkuMzk4IDI2MC4wNzgtNTc5LjI1IDU3OS40NjktNTc5LjI1IDE1NS4wMTYuMDcgMzAwLjUwOCA2MC4zOTggNDA5Ljg5OCAxNjkuODkxIDEwOS40MTQgMTA5LjQ5MiAxNjkuNjMzIDI1NS4wMzEgMTY5LjU3IDQwOS44MTItLjEzMyAzMTkuNDA2LTI2MC4wOTQgNTc5LjI4MS01NzkuNDQ1IDU3OS4yODEtLjAyMyAwIC4wMTYgMCAwIDBoLS4yNThjLTk2Ljk3Ny0uMDMxLTE5Mi4yNjYtMjQuMzc1LTI3Ni44OTgtNzAuNWwtMzA3LjE4OCA4MC41NDh6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNGRkYiIGQ9Ik00NjIuMjczIDM0OS4yOTRjLTExLjIzNC0yNC45NzctMjMuMDYyLTI1LjQ3Ny0zMy43NS0yNS45MTQtOC43NDItLjM3NS0xOC43NS0uMzUyLTI4Ljc0Mi0uMzUyLTEwIDAtMjYuMjUgMy43NTgtMzkuOTkyIDE4Ljc2Ni0xMy43NSAxNS4wMDgtNTIuNSA1MS4yODktNTIuNSAxMjUuMDc4IDAgNzMuNzk3IDUzLjc1IDE0NS4xMDIgNjEuMjQyIDE1NS4xMTcgNy41IDEwIDEwMy43NTggMTY2LjI2NiAyNTYuMjAzIDIyNi4zODMgMTI2LjY5NSA0OS45NjEgMTUyLjQ3NyA0MC4wMjMgMTc5Ljk3NyAzNy41MjNzODguNzM0LTM2LjI3MyAxMDEuMjM0LTcxLjI5N2MxMi41LTM1LjAxNiAxMi41LTY1LjAzMSA4Ljc1LTcxLjMwNS0zLjc1LTYuMjUtMTMuNzUtMTAtMjguNzUtMTcuNXMtODguNzM0LTQzLjc4OS0xMDIuNDg0LTQ4Ljc4OS0yMy43NS03LjUtMzMuNzUgNy41MTZjLTEwIDE1LTM4LjcyNyA0OC43NzMtNDcuNDc3IDU4Ljc3My04Ljc1IDEwLjAyMy0xNy41IDExLjI3My0zMi41IDMuNzczLTE1LTcuNTIzLTYzLjMwNS0yMy4zNDQtMTIwLjYwOS03NC40MzgtNDQuNTg2LTM5Ljc1LTc0LjY4OC04OC44NDQtODMuNDM4LTEwMy44NTktOC43NS0xNS0uOTM4LTIzLjEyNSA2LjU4Ni0zMC42MDIgNi43MzQtNi43MTkgMTUtMTcuNTA4IDIyLjUtMjYuMjY2IDcuNDg0LTguNzU4IDkuOTg0LTE1LjAwOCAxNC45ODQtMjUuMDA4IDUtMTAuMDE2IDIuNS0xOC43NzMtMS4yNS0yNi4yNzNzLTMyLjg5OC04MS42Ny00Ni4yMzQtMTExLjMyNnoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTAzNi44OTggMTc2LjA5MUM5MjMuNTYyIDYyLjY3NyA3NzIuODU5LjE4NSA2MTIuMjk3LjExNCAyODEuNDMuMTE0IDEyLjE3MiAyNjkuMjg2IDEyLjAzOSA2MDAuMTM3IDEyIDcwNS44OTYgMzkuNjMzIDgwOS4xMyA5Mi4xNTYgOTAwLjEzTDcgMTIxMS4wNjdsMzE4LjIwMy04My40MzhjODcuNjcyIDQ3LjgxMiAxODYuMzgzIDczLjAwOCAyODYuODM2IDczLjA0N2guMjU1LjAwM2MzMzAuODEyIDAgNjAwLjEwOS0yNjkuMjE5IDYwMC4yNS02MDAuMDU1LjA1NS0xNjAuMzQzLTYyLjMyOC0zMTEuMTA4LTE3NS42NDktNDI0LjUzem0tNDI0LjYwMSA5MjMuMjQyaC0uMTk1Yy04OS41MzktLjA0Ny0xNzcuMzQ0LTI0LjA4Ni0yNTMuOTMtNjkuNTMxbC0xOC4yMjctMTAuODA1LTE4OC44MjggNDkuNTA4IDUwLjQxNC0xODQuMDM5LTExLjg3NS0xOC44NjdjLTQ5Ljk0NS03OS40MTQtNzYuMzEyLTE3MS4xODgtNzYuMjczLTI2NS40MjIuMTA5LTI3NC45OTIgMjIzLjkwNi00OTguNzExIDQ5OS4xMDItNDk4LjcxMSAxMzMuMjY2LjA1NSAyNTguNTE2IDUyIDM1Mi43MTkgMTQ2LjI2NiA5NC4xOTUgOTQuMjY2IDE0Ni4wMzEgMjE5LjU3OCAxNDUuOTkyIDM1Mi44NTItLjExOCAyNzQuOTk5LTIyMy45MjMgNDk4Ljc0OS00OTguODk5IDQ5OC43NDl6Ii8+Cgk8bWV0YWRhdGE+CgkJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgoJCQk8cmRmOkRlc2NyaXB0aW9uIGFib3V0PSJodHRwczovL2ljb25zY291dC5jb20vbGVnYWwjbGljZW5zZXMiIGRjOnRpdGxlPSJ3aGF0c2FwcC1zeW1ib2wiIGRjOmRlc2NyaXB0aW9uPSJ3aGF0c2FwcC1zeW1ib2wiIGRjOnB1Ymxpc2hlcj0iSWNvbnNjb3V0IiBkYzpkYXRlPSIyMDE3LTA2LTA2IiBkYzpmb3JtYXQ9ImltYWdlL3N2Zyt4bWwiIGRjOmxhbmd1YWdlPSJlbiI+CgkJCQk8ZGM6Y3JlYXRvcj4KCQkJCQk8cmRmOkJhZz4KCQkJCQkJPHJkZjpsaT5JY29uIE1hZmlhPC9yZGY6bGk+CgkJCQkJPC9yZGY6QmFnPgoJCQkJPC9kYzpjcmVhdG9yPgoJCQk8L3JkZjpEZXNjcmlwdGlvbj4KCQk8L3JkZjpSREY+CiAgICA8L21ldGFkYXRhPjwvc3ZnPgo="/>
                                        </span>
                                        <span className="about-inner-text">
                                            Whatsapp </span>7385734759
                                    </div>
                                </motion.span>

                            </div>

                        </div>
                    </div>

                    <div className="col">
                        <form>
                            <div className="page-three-card-right">
                                <label className="form-label">Name:</label>
                                <input type="email" className="form-control form-control-custom" id="email" placeholder="Enter name" name="email" style={{ background: "none", color: "white" }} />

                                <br /><label className="form-label">Email:</label>
                                <input type="email" className="form-control form-control-custom" id="email" placeholder="Enter email address" name="email" style={{ background: "none", color: "white" }} ></input>

                                <div className="mb-3 mt-3">
                                    <label >Project:</label>
                                    <textarea className="form-control form-control-custom" rows="5" id="comment" placeholder="Project" name="text" style={{ background: "none", color: "white" }} ></textarea>


                                </div>
                                <button type="submit" className="btn btn-glass"><a href="#Section-4">Send Message</a></button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
<Footer/>
   </>
  )
}

export default Contact