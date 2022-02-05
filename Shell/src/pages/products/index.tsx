import dynamic from 'next/dynamic'

// @ts-ignore
const RemoteProducts = dynamic(() => import('productsList/main'), { ssr: false })

const App1 = () => <RemoteProducts />

export default App1
