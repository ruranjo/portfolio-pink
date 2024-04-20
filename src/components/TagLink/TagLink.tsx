import React from 'react'

interface Props {
    active: boolean;
    href: string;
    label: string;
    
}

const TagLink:React.FC<Props> = ({active,href,label}) => {
    return (
      <a  href={href} className={`button ${active ? 'active' : ''} p-2 bg-secondary text-center text-lg flex justify-center items-center rounded-lg font-bold text-textColor hover:scale-[1.01] `}>
        {label}
      </a>
      );
}

export default TagLink