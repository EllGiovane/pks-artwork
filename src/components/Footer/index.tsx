export default function Footer(){
  return (
    <footer className="w-full flex h-[100px] px-28 py-3">
      <div className="w-full flex justify-between items-center">
        <p>Copyright © 2025 PKS Artwork |
            <a href="/politica-de-privacidade"> Todos direitos reservados</a>
        </p>
                  
        <div className="flex flex-col items-end">
          <span>Desenvolvido por:</span>
          <a href="https://github.com/EllGiovane" target="_blank">EllGiovane</a>
          <a href="https://github.com/leonard0sena" target="_blank">Leonardo Sena</a>
        </div>
      </div>
    </footer>
  );
}