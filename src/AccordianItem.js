const AccordianItem = ({num, title, currentNum, onOpen, children }) => {
    const isOpen = (num === currentNum);

    return (
        <div 
            onClick={() =>onOpen(num === currentNum ? null : num)}
            style={{borderStyle: "solid", margin: "20px"}}
        >
            <div style={{display: "flex"}}>
                <h3>{title}</h3>
                <div>{isOpen ? "-" : "+"}</div>
            </div>
           {isOpen && <div style={{margin: "20px"}}>{children}</div>} 
        </div>
    )
}

export default AccordianItem;