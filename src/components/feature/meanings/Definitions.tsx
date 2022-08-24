import React, {useId} from "react";


interface DefinitionsProps {
    data: Definition[]
}

const Definitions = ({data}: DefinitionsProps) => {
    const definitionId = useId();

    return (<>
        <h1 className="mt-6">Definition:</h1>
        {
            data.map((definition, index) => (
                <p className="mb-4 pl-2" key={`${definitionId}-${index}`}>{definition.definition}</p>
            ))
        }
    </>)
}

export default Definitions;