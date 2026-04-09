import Demo2 from "./Demo2"

function Demo({ demo, info, children }) {
    return <>
        {children}
        {demo && <div>i'm demo : {demo}</div>}
        <Demo2 passage={info} />
    </>
}

export default Demo