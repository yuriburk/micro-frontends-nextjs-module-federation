import Link from 'next/link'

import * as SC from './styles'

const Main = () => (
  <SC.Container>
    <Link href="/products">Products</Link>
    <Link href="/">Home</Link>
    <Link href="/products/detail/1">Product</Link>
  </SC.Container>
)

export default Main
