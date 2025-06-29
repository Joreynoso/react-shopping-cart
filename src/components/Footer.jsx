export default function Footer() {
    return (
        <footer className="w-full border-t border-t-neutral-200 dark:border-t-stone-800 px-4 py-6">
            <p className="text-xs text-neutral-500 dark:text-[text-[#8B8C8D]] text-center">
                © {new Date().getFullYear()} Creado por José Reynoso, todos los derechos reservados.
            </p>
        </footer>
    )
}