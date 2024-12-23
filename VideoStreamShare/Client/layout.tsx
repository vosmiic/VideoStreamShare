export default function Layout({ children } : { children: any }) {
    return (
        <>
            <div className="max-w-screen-xl flex flex-wrap mx-auto items-center justify-between p-2">
                <a href="/" className="flex items-center">Home</a>
                <ul className="flex flex-col md:p-0">
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}