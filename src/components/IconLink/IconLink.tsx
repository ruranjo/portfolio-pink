import React from 'react';
import { IconType } from 'react-icons'; // Importa el tipo IconType desde tu biblioteca de iconos

interface Props {
    active: boolean;
    href: string;
    icon: IconType; // Usa el tipo IconType para los iconos
}

const IconLink: React.FC<Props> = ({ active, href, icon: Icon }) => {
    return (
        <a href={href} className={`icon-link ${active ? 'active' : ''}`} style={{ display: 'inline-block', lineHeight: 0 }}>
            {Icon && <Icon size={24} />} {/* Renderiza el icono como un componente JSX */}
        </a>
    );
}

export default IconLink;