import { FunctionComponent, PropsWithChildren } from 'react'

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="relative overflow-x-hidden w-screen h-screen mx-auto">
    {children}
  </div>
)
