"use client"

import { useState } from "react";
import SearchMenuFecturer from "../SearchMenuFecturer/SearchMenuFecturer";

export default function SearchBar() {

    const [manufacturer, setManuFacturer] = useState("");

    return (
        <div>
            
            <SearchMenuFecturer
                manufacturer={manufacturer}
                setManuFacturer={setManuFacturer}

            />
        </div>
    )
}
