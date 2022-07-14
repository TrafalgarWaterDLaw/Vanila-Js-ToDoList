import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Dashboard from '../components/Ui/Dashboard';
import TodosContextProvider from '../store/todos.context';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<TodosContextProvider>
			<Dashboard>
				<Component {...pageProps} />
			</Dashboard>
		</TodosContextProvider>
	);
}

export default MyApp;
