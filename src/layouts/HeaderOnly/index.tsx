import React from 'react'
import Header from '~/layouts/components/Header'
type Props = {
    children?: React.ReactNode;

};

export default function HeaderOnly({children}:Props) {
  return (
    <div><Header/> {children}</div>
  )
}
