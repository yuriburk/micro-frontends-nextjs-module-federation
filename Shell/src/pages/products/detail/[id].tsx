import dynamic from 'next/dynamic'

// @ts-ignore
const RemoteProduct = dynamic(() => import('productDetail/main'), { ssr: false })

const App1 = () => <RemoteProduct />

export default App1
