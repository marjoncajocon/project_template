export default function ProfileAbout({params}: {params: {id: string}}) {

    return (

        <> 
        
        <hr />Profile About Page 
        <h1>ID: {parseInt(params.id)}</h1>
        </>
    )
}