import { MenuBar } from "@/components/Menu"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 h-20">
      <MenuBar />
    </header>
  )
}

export default Header
