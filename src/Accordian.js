import { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = ({items}) => {

    const [currentNum, setCurrentNum] = useState(null);

    const onOpen = (num) => {
        setCurrentNum(num);
    }

    return (
        <div>
            {items.map(item => 
                <AccordianItem 
                    num={item.id} 
                    title={item.title} 
                    currentNum={currentNum} 
                    onOpen={onOpen}
                    key={item.title}
                >
                    {item.body}
                </AccordianItem>
            )}
        </div>
    )
}

export default Accordian;