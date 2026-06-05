import { NavMenu } from './NavMenu';

export function Layout({ children }) {
  return (
    <div className="app-shell">
      <NavMenu />
      <main className="app-main">{children}</main>
    </div>
  );
}
