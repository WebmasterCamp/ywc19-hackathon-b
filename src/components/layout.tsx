import { FunctionComponent, PropsWithChildren } from 'react'

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="relative overflow-x-hidden max-w-lg w-screen h-screen mx-auto">
    {children}
  </div>
)
