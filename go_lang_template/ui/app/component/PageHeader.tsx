export default function PageHeader({icon, title, pages}: {icon?: string, title: string, pages?:string[]})  {

    return (
        <>
           <div className="d-flex flex-row justify-content-between" style={{marginBottom: 10}}>
                <div className="left d-flex flex-row align-items-center gap-2">
                    {
                    icon != undefined ? 
                        <i className={`fa fa-${icon}`}></i>
                    : <i className="fa fa-book"></i>
                    }   
                    <div>{title}</div>
                </div>
                {/* <div className="right">
                    { pages != undefined ?
                    <ol className="breadcrumb">
                        {pages.map((item, index) => <> <li className="breadcrumb-item active" key={index}>{item}</li></>)}
                    </ol>: <></>
                    }
                </div> */}
            </div> 
        </>
    );
}