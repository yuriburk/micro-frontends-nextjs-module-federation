import dynamic from 'next/dynamic'

const RemoteProducts = dynamic(() => import('productsList/main'), { ssr: false })

const App1 = () => <RemoteProducts />

export default App1
