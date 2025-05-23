export default function Header(){
  return (
    <header className="w-full flex h-[100px] px-41 py-3">
      <div className="w-full flex justify-between items-center">
        <p>Pks Artwork</p>

        </div>
      <div className="flex justify-between items-center">
        <a href="/"> Home </a>
        <a href="/projectos"> Projetos </a>
        <a href="/encomendas"> Encomendas </a>
    </div>
    </header>
  )
}

