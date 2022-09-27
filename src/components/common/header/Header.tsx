import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2">
            <Navbar>
                <Navbar.Start>
                    <Dropdown>
                        <Button color="ghost" tabIndex={0} className="lg:hidden mr-2">
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
                        <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
                            <Dropdown.Item href="/">
                                Dictionary
                            </Dropdown.Item>
                            <Dropdown.Item href="/translate">
                                Translate
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to="/" className="text-2xl font-bold">iTongue</Link>
                    <Menu horizontal className="p-0 hidden lg:flex">
                        <Menu.Item className="">
                            <Link to="/">Dictionary</Link>
                        </Menu.Item>
                        <Menu.Item className="ml-2">
                            <Link to="/translate">Translate</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.Start>
                {/* <Navbar className="hidden lg:flex">
                    <Menu horizontal className="p-0">
                        <Menu.Item className="">
                            <Link to="/">Dictionary</Link>
                        </Menu.Item>
                        <Menu.Item className="ml-2">
                            <Link to="/translate">Translate</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar> */}
                {/* TODO: added toggle light/dark theme */}
                <Navbar.End>
                </Navbar.End>
            </Navbar>
        </div>
    )
}

export default Header;