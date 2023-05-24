import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../styles/debug.css';
import { HeaderContext, HeaderProvider } from '@/context/context';
import { StrictMode } from 'react';

export default function App({ Component, pageProps }) {
	return (
		<StrictMode>
			<HeaderProvider>
				<Component {...pageProps} />
			</HeaderProvider>
		</StrictMode>
	);
}
