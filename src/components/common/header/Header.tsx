import { useState } from "react";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpenMenu(!isOpenMenu);
    }

    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2">
            <Navbar>
                <Navbar.Start>
                    <Link to="/" className="text-2xl font-bold">iTongue</Link>
                </Navbar.Start>
                <Navbar.Center>
                    <Menu horizontal className="p-0 hidden lg:flex">
                        <Menu.Item>
                            <Link to="/dictionary" className="hover:text-orange-400 hover:bg-transparent">Dictionary</Link>
                        </Menu.Item>
                        <Menu.Item className="ml-2">
                            <Link to="/translate" className="hover:text-orange-400 hover:bg-transparent">Translate</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                {/* TODO: added toggle light/dark theme */}
                <Navbar.End>
                    <Dropdown vertical="end">
                        <Button color="ghost" tabIndex={0} className="lg:hidden mr-2" onClick={handleOpenMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </Button>
                        {
                            isOpenMenu &&
                            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
                                <Link to="/" className="my-2 p-2 hover:bg-slate-100 rounded-lg" onClick={handleOpenMenu}>Dictionary</Link>
                                <Link to="/translate" className="my-2 p-2 hover:bg-slate-100 rounded-lg" onClick={handleOpenMenu}>Translate</Link>
                            </Dropdown.Menu>
                        }
                        
                    </Dropdown>
                </Navbar.End>
            </Navbar>
        </div>
    )
}

export default Header;