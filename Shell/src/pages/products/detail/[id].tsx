import dynamic from 'next/dynamic'

const RemoteProduct = dynamic(() => import('ProductDetail/main'), { ssr: false })

const App1 = () => <RemoteProduct />

export default App1
