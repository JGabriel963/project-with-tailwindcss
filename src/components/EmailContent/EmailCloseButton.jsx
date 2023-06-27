import { FiX } from "react-icons/fi";

export default function EmailCloseButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="
                absolute top-2 right-2 px-2 py-1 rounded
                bg-red-300 hover:bg-red-400
                dark:bg-red-500 dark:hover:bg-red-600 transition-colors
            "
        >
            <FiX className="inline sm:mr-1 mb-[1px]" />
            <span className="hidden sm:inline">Fechar</span>
        </button>
    )
}