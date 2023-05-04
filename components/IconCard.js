import { useState } from 'react';
import  * as icons from '@wordpress/icons';


export default function IconCard({icon}) {

	const [isCopied, setIsCopied] = useState(false);

	const importText = `import { Icon, ${icon} } from '@wordpress/icons';`;
	const iconText = `<Icon icon={${icon}} />`;

	async function handleCopyClick(text) {
		setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
		return await navigator.clipboard.writeText(text);
	}

	return (
		<div className="icon-card">
			<icons.Icon icon={ icons[icon] } size={64} />

			<button onClick={() => { handleCopyClick(icon)}} className="no-border">
				<span className="visually-hidden">Click to copy</span>
				<h2>{icon}</h2>
				<icons.Icon icon={ icons["copy"] } size={24}/> 
			</button>
			
			
			<button onClick={() => { handleCopyClick(importText)}}>
				<span className="visually-hidden">Click to copy</span>
				<pre>{importText}</pre>
				<icons.Icon icon={ icons["copy"] } size={24}/>
			</button>
			<button onClick={() => { handleCopyClick(iconText)}}>
				<span className="visually-hidden">Click to copy</span>
				<pre>{iconText}</pre>
				<icons.Icon icon={ icons["copy"] } size={24}/>
			</button>
			{isCopied && <span className="copied">Copied!</span>}
		</div>
	)
}
