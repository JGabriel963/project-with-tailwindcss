import { FiAlertOctagon, FiArchive, FiEdit3, FiFileText, FiInbox, FiSend, FiTrash2 } from "react-icons/fi";
import WhiteButton from "./WhiteButton";
import Button from "./Button";

const inileIcon = 'inline mr-1 mb-1'

export default function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
            <WhiteButton>
                <FiEdit3 className={inileIcon}/>
                Escrever
            </WhiteButton>
            <Button active>
                <FiInbox className={inileIcon} />
                Caixa de Entrada
            </Button>
            <Button>
                <FiSend className={inileIcon} />
                Envidados
            </Button>
            <Button>
                <FiFileText className={inileIcon} />
                Rascunhos
            </Button>
            <Button>
                <FiArchive className={inileIcon} />
                Arquivados
            </Button>
            <Button>
                <FiAlertOctagon className={inileIcon} />
                Span
            </Button>
            <Button>
                <FiTrash2 className={inileIcon} />
                Lixeira
            </Button>
        </aside>
    )
}