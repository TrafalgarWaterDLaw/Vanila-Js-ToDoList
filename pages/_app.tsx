import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TodosContextProvider from '../store/todos.context';
import Head from 'next/head';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='author' content='Richard' />
				<meta name='description' content='Task manager' />
				<meta name='keywords' content='Tododoole, Tasks'></meta>
				<title>Tododdole</title>
			</Head>

			<TodosContextProvider>
				<Component {...pageProps} />
			</TodosContextProvider>
		</>
	);
}

export default MyApp;
